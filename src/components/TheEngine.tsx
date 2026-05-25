"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Pos = { x: number; y: number };
type LabelType = "Object" | "Why" | "What" | "How";
type Mode = "company" | "consumer";

interface NodeDef { id: string; label: LabelType; pos: Pos; }
interface EdgeDef { from: string; to: string; }

const R:  Record<LabelType, number> = { Object: 30, Why: 21, What: 15, How: 12 };
const FS: Record<LabelType, number> = { Object: 10, Why: 9,  What: 7.5, How: 7  };

/* ══════════════════════════════════════════════════════
   고정 최적 경로 — 두 관점 모두에서 절대 이동하지 않음
══════════════════════════════════════════════════════ */
const MATCHED_NODES: NodeDef[] = [
  { id: "obj",   label: "Object", pos: { x: 430, y: 258 } },
  { id: "why_m", label: "Why",   pos: { x: 278, y: 152 } },
  { id: "wt_m",  label: "What",  pos: { x: 145, y: 85  } },
  { id: "h_m",   label: "How",   pos: { x: 42,  y: 48  } },
];
const MATCHED_EDGES: EdgeDef[] = [
  { from: "obj",   to: "why_m" },
  { from: "why_m", to: "wt_m"  },
  { from: "wt_m",  to: "h_m"   },
];
const MATCHED_POS = Object.fromEntries(MATCHED_NODES.map(n => [n.id, n.pos]));

/* ══════════════════════════════════════════════════════
   회사 관점 — Why 4개 / What 8개 / How 8개
   우측 반구 중심으로 규칙적인 트리 형태
══════════════════════════════════════════════════════ */
const C_NODES: NodeDef[] = [
  // Why
  { id:"cw1",  label:"Why",  pos:{x:542,y:120} },
  { id:"cw2",  label:"Why",  pos:{x:614,y:252} },
  { id:"cw3",  label:"Why",  pos:{x:580,y:388} },
  { id:"cw4",  label:"Why",  pos:{x:212,y:390} },
  // What
  { id:"cwt1a",label:"What", pos:{x:630,y:60}  },
  { id:"cwt1b",label:"What", pos:{x:714,y:132} },
  { id:"cwt2a",label:"What", pos:{x:720,y:192} },
  { id:"cwt2b",label:"What", pos:{x:738,y:298} },
  { id:"cwt3a",label:"What", pos:{x:708,y:354} },
  { id:"cwt3b",label:"What", pos:{x:715,y:444} },
  { id:"cwt4a",label:"What", pos:{x:125,y:454} },
  { id:"cwt4b",label:"What", pos:{x:95, y:344} },
  // How
  { id:"ch1",  label:"How",  pos:{x:714,y:26}  },
  { id:"ch2",  label:"How",  pos:{x:796,y:94}  },
  { id:"ch3",  label:"How",  pos:{x:812,y:160} },
  { id:"ch4",  label:"How",  pos:{x:824,y:340} },
  { id:"ch5",  label:"How",  pos:{x:802,y:316} },
  { id:"ch6",  label:"How",  pos:{x:810,y:478} },
  { id:"ch7",  label:"How",  pos:{x:46, y:490} },
  { id:"ch8",  label:"How",  pos:{x:30, y:304} },
];
const C_EDGES: EdgeDef[] = [
  {from:"obj", to:"cw1"}, {from:"obj", to:"cw2"}, {from:"obj", to:"cw3"}, {from:"obj", to:"cw4"},
  {from:"cw1", to:"cwt1a"},{from:"cw1", to:"cwt1b"},
  {from:"cw2", to:"cwt2a"},{from:"cw2", to:"cwt2b"},
  {from:"cw3", to:"cwt3a"},{from:"cw3", to:"cwt3b"},
  {from:"cw4", to:"cwt4a"},{from:"cw4", to:"cwt4b"},
  {from:"cwt1a",to:"ch1"},{from:"cwt1b",to:"ch2"},
  {from:"cwt2a",to:"ch3"},{from:"cwt2b",to:"ch4"},
  {from:"cwt3a",to:"ch5"},{from:"cwt3b",to:"ch6"},
  {from:"cwt4a",to:"ch7"},{from:"cwt4b",to:"ch8"},
];

/* ══════════════════════════════════════════════════════
   소비자 관점 — Why 6개 / What 8개 / How 8개
   좌측까지 분포, 비대칭 구조, 일부 직접 Why→How 연결
══════════════════════════════════════════════════════ */
const P_NODES: NodeDef[] = [
  // Why (6개 — 전 방향으로 분산)
  { id:"pw1",  label:"Why",  pos:{x:570,y:95}  },
  { id:"pw2",  label:"Why",  pos:{x:642,y:238} },
  { id:"pw3",  label:"Why",  pos:{x:602,y:408} },
  { id:"pw4",  label:"Why",  pos:{x:424,y:472} },
  { id:"pw5",  label:"Why",  pos:{x:250,y:424} },
  { id:"pw6",  label:"Why",  pos:{x:186,y:260} },
  // What (8개 — 비대칭: Why_2는 2개, Why_6는 2개)
  { id:"pwt1",  label:"What", pos:{x:655,y:40}  },
  { id:"pwt2a", label:"What", pos:{x:760,y:180} },
  { id:"pwt2b", label:"What", pos:{x:758,y:288} },
  { id:"pwt3",  label:"What", pos:{x:732,y:458} },
  { id:"pwt4",  label:"What", pos:{x:462,y:514} },
  { id:"pwt5",  label:"What", pos:{x:180,y:482} },
  { id:"pwt6a", label:"What", pos:{x:92, y:210} },
  { id:"pwt6b", label:"What", pos:{x:90, y:318} },
  // How (8개 — Why_2는 직접 How도 연결 = 프랙탈 단축 경로)
  { id:"ph1",  label:"How",  pos:{x:736,y:14}  },
  { id:"ph2a", label:"How",  pos:{x:842,y:144} },
  { id:"ph2b", label:"How",  pos:{x:840,y:300} },
  { id:"ph3",  label:"How",  pos:{x:822,y:494} },
  { id:"ph4",  label:"How",  pos:{x:496,y:511} },
  { id:"ph5",  label:"How",  pos:{x:118,y:504} },
  { id:"ph6a", label:"How",  pos:{x:30, y:188} },
  { id:"ph6b", label:"How",  pos:{x:28, y:330} },
];
const P_EDGES: EdgeDef[] = [
  {from:"obj", to:"pw1"},{from:"obj", to:"pw2"},{from:"obj", to:"pw3"},
  {from:"obj", to:"pw4"},{from:"obj", to:"pw5"},{from:"obj", to:"pw6"},
  {from:"pw1",  to:"pwt1"},
  {from:"pw2",  to:"pwt2a"},{from:"pw2",  to:"pwt2b"},
  {from:"pw3",  to:"pwt3"},
  {from:"pw4",  to:"pwt4"},
  {from:"pw5",  to:"pwt5"},
  {from:"pw6",  to:"pwt6a"},{from:"pw6",  to:"pwt6b"},
  {from:"pwt1",  to:"ph1"},
  {from:"pwt2a", to:"ph2a"},{from:"pwt2b", to:"ph2b"},
  {from:"pwt3",  to:"ph3"},
  {from:"pwt4",  to:"ph4"},
  {from:"pwt5",  to:"ph5"},
  {from:"pwt6a", to:"ph6a"},{from:"pwt6b", to:"ph6b"},
];

/* ── 헬퍼 ── */
function buildPos(extra: NodeDef[]) {
  return Object.fromEntries([...MATCHED_NODES, ...extra].map(n => [n.id, n.pos]));
}

interface GroupProps {
  nodes: NodeDef[];
  edges: EdgeDef[];
  posMap: Record<string, Pos>;
  stroke: string;
  text: string;
}
function GraphGroup({ nodes, edges, posMap, stroke, text }: GroupProps) {
  return (
    <>
      {edges.map(e => {
        const fp = posMap[e.from], tp = posMap[e.to];
        if (!fp || !tp) return null;
        return (
          <path
            key={`${e.from}→${e.to}`}
            d={`M${fp.x},${fp.y} L${tp.x},${tp.y}`}
            stroke={stroke} strokeWidth={1} strokeOpacity={0.22} fill="none"
          />
        );
      })}
      {nodes.map(node => {
        const r = R[node.label];
        return (
          <g key={node.id} transform={`translate(${node.pos.x},${node.pos.y})`}>
            <circle cx={0} cy={0} r={r} fill={`${stroke}18`} stroke={stroke} strokeWidth={1} strokeOpacity={0.5} />
            <text x={0} y={0} textAnchor="middle" dominantBaseline="central"
              fontSize={FS[node.label]} fill={text} fillOpacity={0.65}
              fontFamily="sans-serif">
              {node.label}
            </text>
          </g>
        );
      })}
    </>
  );
}

/* ══════════════════════════════════════════════════════
   메인 컴포넌트
══════════════════════════════════════════════════════ */
export default function TheEngine() {
  const [mode, setMode] = useState<Mode>("company");

  const cPosMap = buildPos(C_NODES);
  const pPosMap = buildPos(P_NODES);

  return (
    <div className="w-full">
      {/* 헤더 */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
          The Engine
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          회사와 소비자의 <span className="text-amber-400">일치점</span>을 찾는 프랙탈 사고 엔진
        </h3>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Object에서 뻗어나가는 수많은 Why·What·How 중,{" "}
          <strong className="text-amber-400">두 관점이 겹치는 단 하나의 경로</strong>를 찾아냅니다.
        </p>
      </motion.div>

      {/* 모드 인디케이터 */}
      <div className="flex justify-center gap-3 mb-5 pointer-events-none select-none">
        {(["company", "consumer"] as const).map(m => (
          <div key={m} className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-500 ${
            mode === m
              ? m === "company"
                ? "bg-blue-600/30 border-blue-400 text-blue-300"
                : "bg-purple-600/30 border-purple-400 text-purple-300"
              : "bg-white/5 border-white/10 text-gray-700"
          }`}>
            {m === "company" ? "🏢 회사 관점" : "👤 소비자 관점"}
          </div>
        ))}
      </div>

      {/* SVG */}
      <div
        className="relative rounded-2xl border border-white/10 bg-[#060d1a] cursor-crosshair"
        onMouseEnter={() => setMode("consumer")}
        onMouseLeave={() => setMode("company")}
        onClick={() => setMode(p => p === "company" ? "consumer" : "company")}
      >
        <p className="absolute top-3 right-4 text-gray-700 text-[11px] pointer-events-none select-none">
          hover → 소비자 관점으로 전환
        </p>

        <svg viewBox="-12 -12 884 544" className="w-full" style={{ display: "block" }}>
          {/* ── 레이어 1: 비고정 구조 (AnimatePresence로 교체) ── */}
          <AnimatePresence mode="wait">
            {mode === "company" ? (
              <motion.g key="company"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}>
                <GraphGroup nodes={C_NODES} edges={C_EDGES} posMap={cPosMap} stroke="#3b82f6" text="#93c5fd" />
              </motion.g>
            ) : (
              <motion.g key="consumer"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}>
                <GraphGroup nodes={P_NODES} edges={P_EDGES} posMap={pPosMap} stroke="#8b5cf6" text="#c4b5fd" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* ── 레이어 2: 고정 최적 경로 (항상 최상단에 렌더) ── */}
          {MATCHED_EDGES.map(e => {
            const fp = MATCHED_POS[e.from], tp = MATCHED_POS[e.to];
            return (
              <g key={`m-${e.from}→${e.to}`}>
                <path d={`M${fp.x},${fp.y} L${tp.x},${tp.y}`}
                  stroke="#f59e0b" strokeWidth={10} strokeOpacity={0.18}
                  fill="none" strokeLinecap="round" />
                <path d={`M${fp.x},${fp.y} L${tp.x},${tp.y}`}
                  stroke="#f59e0b" strokeWidth={2.5} strokeOpacity={0.95} fill="none" />
              </g>
            );
          })}
          {MATCHED_NODES.map(node => {
            const r = R[node.label];
            return (
              <g key={node.id} transform={`translate(${node.pos.x},${node.pos.y})`}>
                <circle cx={0} cy={0} r={r + 10} fill="#f59e0b" fillOpacity={0.07} />
                <circle cx={0} cy={0} r={r}
                  fill="rgba(245,158,11,0.13)" stroke="#f59e0b"
                  strokeWidth={2} strokeOpacity={1} />
                <text x={0} y={0} textAnchor="middle" dominantBaseline="central"
                  fontSize={FS[node.label]} fill="#f59e0b" fontWeight="bold"
                  fontFamily="sans-serif">
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 범례 */}
      <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-amber-400/90 rounded" />
          <span className="text-amber-400/90">최적 일치 경로 (두 관점에서 고정)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-blue-500/40 rounded" />
          <span>회사 관점 경로</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-purple-500/40 rounded" />
          <span>소비자 관점 경로</span>
        </div>
        <span className="text-gray-700">·</span>
        <span>How → 새 Why → 프랙탈 반복</span>
      </div>
    </div>
  );
}
