"use client";
import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";

const slides = [
  { src: "/images/hs_1.jpg",   label: "하스스톤 캠페인 1" },
  { src: "/images/hs_2.jpg",   label: "하스스톤 캠페인 2" },
  { src: "/images/hs_3.jpg",   label: "하스스톤 캠페인 3" },
  { src: "/images/hs_4.jpg",   label: "하스스톤 캠페인 4" },
  { src: "/images/wow_1.jpg",  label: "WOW 캠페인 1" },
  { src: "/images/wow_2.jpg",  label: "WOW 캠페인 2" },
  { src: "/images/diageo.jpg", label: "디아지오 캠페인" },
];

const clients = [
  "블리자드 코리아", "인천공항 면세점", "디아지오 코리아",
  "다양한 대기업 클라이언트",
];

const capabilities = [
  { icon: "📋", title: "비딩·기획", desc: "광고 기획 비딩 문서 작성 및 프레젠테이션" },
  { icon: "🎯", title: "IMC 전략", desc: "바이럴·콘텐츠·퍼포먼스·인플루언서 통합 전략" },
  { icon: "🤝", title: "컨소시엄 운영", desc: "종합광고대행사와의 협업 체계 구축으로 경쟁력 확보" },
  { icon: "📊", title: "퍼포먼스 마케팅", desc: "데이터 기반 광고 최적화 및 ROI 관리" },
];

export default function KeyProject3() {
  return (
    <section id="project3" className="min-h-screen py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Key Project 3</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            IMC 마케팅<br />
            <span className="text-amber-400">연 100억+ 광고취급액</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            바이럴 마케팅으로 시작해 IMC 종합 마케팅까지 확장.
            종합광고대행사와의 컨소시엄으로 네임밸류 한계를 극복하고
            연 100억 이상의 광고취급액을 달성했습니다.
          </p>
        </motion.div>

        {/* 본문 */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">

            {/* 배경·전략 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">전략적 접근</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 shrink-0">▸</span>
                  <div>
                    <div className="text-white font-medium mb-1">질문: 고부가가치를 낼 수 있는 광고대행업은?</div>
                    <div className="text-gray-400">낮은 네임밸류와 유사실적이라는 한계를 직시하고 종합광고대행사와의 컨소시엄이라는 해결책 도출.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 shrink-0">▸</span>
                  <div>
                    <div className="text-white font-medium mb-1">블리자드·인천공항·디아지오 등 캠페인</div>
                    <div className="text-gray-400">다양한 기업 캠페인을 비딩부터 정산까지 책임지고 완수.</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 shrink-0">▸</span>
                  <div>
                    <div className="text-white font-medium mb-1">인사이트</div>
                    <div className="text-gray-400">&ldquo;결국 고객의 선택은 욕구와 감정에 의해 결정된다&rdquo; — 이 원칙이 이후 서비스 기획 전반에 적용됨.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 역량 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {capabilities.map((c) => (
                <div key={c.title} className="bg-[#111827] border border-white/10 rounded-xl p-4 hover:border-amber-500/30 transition-colors">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="text-white font-bold text-xs mb-1">{c.title}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* 주요 클라이언트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-amber-500/20 rounded-2xl p-6"
            >
              <h3 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">주요 클라이언트</h3>
              <div className="flex flex-wrap gap-2">
                {clients.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 성과 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { value: "100억+", label: "연간 광고취급액", sub: "안정적으로 집행" },
              { value: "500%+", label: "연 평균 매출 성장률", sub: "꾸준히 달성" },
              { value: "47억", label: "최종 EXIT 규모", sub: "리스크 관리 기반" },
              { value: "10년 9개월", label: "운영 기간", sub: "2011 – 2022" },
            ].map((m) => (
              <div key={m.label} className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-5 flex items-center gap-5">
                <div className="text-3xl font-black text-amber-400 shrink-0">{m.value}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{m.label}</div>
                  <div className="text-gray-500 text-xs">{m.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 이미지 슬라이더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-6 text-center">캠페인 포트폴리오</h3>
          <ImageSlider slides={slides} accentColor="amber" height={960} objectFit="contain" />
        </motion.div>

        {/* 푸터 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 text-sm mb-2">
            &ldquo;무엇을 만들지보다, 무엇을 질문할지 아는 사람&rdquo;
          </p>
          <p className="text-gray-700 text-xs">
            15년의 경험은 누적되었고, AI라는 사고의 증폭기도 준비되었습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
