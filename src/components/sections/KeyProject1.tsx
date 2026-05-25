"use client";
import { motion } from "framer-motion";

const metrics = [
  { value: "45일", label: "풀스택 MVP 구축" },
  { value: "146명", label: "22일 동안 가입자" },
  { value: "7,000+", label: "한·미 종목 일일 자동 분석" },
  { value: "2분 15초", label: "평균 세션 시간" },
];

const steps = [
  { icon: "🎯", title: "문제 정의", desc: "전문 지식 없이도 개인 맞춤 투자 전략 수립 가능?" },
  { icon: "⚙️", title: "설계", desc: "시나리오 라우팅 · 211개 Few-shot 프롬프트 · 다층 AI 검수 체계" },
  { icon: "🚀", title: "구현", desc: "기획·UX/UI·AI 엔지니어링·프론트·백엔드·마케팅을 1인 풀스택으로" },
  { icon: "📈", title: "운영", desc: "스케줄러 기반 무인 자동 체인, 장애 복구·재시도 설계 포함" },
];

export default function KeyProject1() {
  return (
    <section id="project1" className="min-h-screen py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Key Project 1</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            AI 주식 정보 서비스<br />
            <span className="text-blue-400">&lsquo;떡상&rsquo;</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            각종 AI 도구와 바이브코딩으로 직접 구현한 AI 핀테크 서비스.
            &lsquo;그래서 뭐 사면 될까?&rsquo;라는 모든 투자자의 본질을 직접적으로 해결합니다.
          </p>
        </motion.div>

        {/* 3개 카드 — 전체폭 가로 나열 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* 배경·문제 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">배경 · 문제</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              전문 지식이 없어도 투자 전략을 세울 수 있을까?<br />
              개인 맞춤형 리스크 관리 부재가 핵심 문제였습니다.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">해결 방안:</strong> 개인 맞춤 포트폴리오의 시나리오 기반 주식 투자 전략 제공.
              데이터 수집 → 퀀트 분석 → AI 채팅 → 포트폴리오 관리 등 7개 프로세스를 Railway에 직접 배포·운영.
            </p>
          </motion.div>

          {/* AI 비서 설계 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-blue-500/20 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">AI 비서 설계</h3>
            <ul className="space-y-2 text-sm text-gray-300 flex-1">
              <li className="flex gap-2"><span className="text-blue-400 mt-0.5 shrink-0">▸</span> 질문을 단순/복합/일반/외부검색 4유형으로 자동 분류하는 룰베이스 라우터</li>
              <li className="flex gap-2"><span className="text-blue-400 mt-0.5 shrink-0">▸</span> 211개 Few-shot 프롬프트 직접 작성 및 전용 모델 Fine-tuning</li>
              <li className="flex gap-2"><span className="text-blue-400 mt-0.5 shrink-0">▸</span> RAG · Text to SQL · 복잡도 기반 라우팅으로 차트·그래프 생성</li>
              <li className="flex gap-2"><span className="text-blue-400 mt-0.5 shrink-0">▸</span> 보안→허용범위→문법→자동수정(최대 2회)의 다층 검수 파이프라인</li>
              <li className="flex gap-2"><span className="text-blue-400 mt-0.5 shrink-0">▸</span> 신뢰도(HIGH/MEDIUM/LOW) 산출 및 근거 함께 제시</li>
            </ul>
          </motion.div>

          {/* 무인 자동 운영 체인 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">무인 자동 운영 체인</h3>
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              장 마감 시각에 맞춰 <strong className="text-white">데이터 수집 → 퀀트 분석 → 포트폴리오 추천</strong>이 자동 순차 실행.
              수집 실패 시 자동 재시도, 거래일 자동 판단(휴장일 스킵), 특정 단계부터 재개 가능한 복구 기능까지 직접 설계.
            </p>
          </motion.div>
        </div>

        {/* 버튼 2개 — 나란히 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 mb-16"
        >
          <motion.a
            href="https://www.dducksang.com/chat"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-colors glow-blue"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            실제 서비스 방문하기 →
          </motion.a>

          <a
            href="https://github.com/vinjung/alphafolio_chat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub 소스 보기
          </a>
        </motion.div>

        {/* 실행 과정 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-white font-bold text-xl mb-6 text-center">실행 과정</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative bg-[#111827] border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                {i < steps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-700 hidden lg:block">→</span>
                )}
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-white font-bold text-sm mb-1">{step.title}</div>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 성과 지표 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-5 text-center">
              <div className="text-3xl font-black text-blue-400 mb-1">{m.value}</div>
              <div className="text-gray-400 text-xs">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
