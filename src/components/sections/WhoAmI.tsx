"use client";
import { motion } from "framer-motion";
import TheEngine from "@/components/TheEngine";

const stages = [
  {
    period: "2011 – 2022",
    role: "Co-founder / CMO",
    company: "아이두마케팅",
    desc: "광고대행사를 직접 공동 창업해 2명에서 30명 규모로 성장시키고, 연 100억+ 광고취급액을 집행하며 47억 EXIT로 마무리.",
    tags: ["광고 기획", "IMC 마케팅", "47억 EXIT"],
    color: "blue",
  },
  {
    period: "2022 – 2023",
    role: "CPO",
    company: "다양한 도메인",
    desc: "게임 P2E 생태계, 이커머스 브랜드 런칭, 소셜 IP 플랫폼 등 다양한 도메인에서 서비스 기획·운영의 전 사이클을 직접 진행.",
    tags: ["게임", "이커머스", "소셜 플랫폼"],
    color: "purple",
  },
  {
    period: "2024 – 현재",
    role: "AI CPO / Squad PM",
    company: "허그랩 · PFCT",
    desc: "AI 온톨로지 기획 및 금융·공공 도메인 AI 서비스 납품. 주담대 챗봇 UX 재설계로 계약 제출 +19.4% 달성.",
    tags: ["AI 서비스", "챗봇 UX", "데이터 개선"],
    color: "amber",
  },
];

const skills = [
  { icon: "⚙️", label: "운영 자동화·시스템화" },
  { icon: "🤖", label: "AI·챗봇 시나리오 설계" },
  { icon: "📊", label: "데이터 기반 운영 개선" },
  { icon: "🤝", label: "다중 이해관계자 협업" },
];

export default function WhoAmI() {
  return (
    <section id="who" className="min-h-screen pt-56 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* 히어로 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            15 Years Journey · 4.7B EXIT · AI-Powered Full-stack Builder
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white mb-6">
            본질에 대한 질문을 던지며<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              해결할 문제를 정의합니다
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            광고대행사 공동 창업부터 AI 서비스 풀스택 개발까지, 15년간 다양한 도메인에서
            서비스를 <strong className="text-white">기획·구축·운영</strong>해왔습니다.
            사업·마케팅·기술·사용자 관점을 동시에 놓고 인사이트를 도출해 실무에 적용하는 것이 제가 일하는 방식입니다.
          </p>
        </motion.div>

        {/* 핵심 역량 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/40 transition-colors"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-sm font-medium text-gray-300">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 커리어 타임라인 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Career Roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <motion.div
                key={s.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border p-6 bg-[#0d1829]/60 ${
                  s.color === "blue"
                    ? "border-blue-500/30"
                    : s.color === "purple"
                    ? "border-purple-500/30"
                    : "border-amber-500/30"
                }`}
              >
                <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                  s.color === "blue" ? "text-blue-400" : s.color === "purple" ? "text-purple-400" : "text-amber-400"
                }`}>
                  Stage {i + 1} · {s.period}
                </div>
                <div className="text-white font-bold text-lg mb-0.5">{s.role}</div>
                <div className="text-gray-500 text-sm mb-3">{s.company}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 text-gray-400 text-xs border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Engine 시각화 */}
        <TheEngine />
      </div>
    </section>
  );
}
