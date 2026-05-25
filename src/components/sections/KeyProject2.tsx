"use client";
import { motion } from "framer-motion";

const slides = [
  { src: "/images/celad_1.jpg", label: "셀레드 화면 1" },
  { src: "/images/celad_2.jpg", label: "셀레드 화면 2" },
  { src: "/images/celad_3.jpg", label: "셀레드 화면 3" },
];

const metrics = [
  { value: "25,000명", label: "인플루언서 모집" },
  { value: "4,000개", label: "상품 입점" },
  { value: "3명×2주 → 1명×2일", label: "업무 단축" },
  { value: "그랑프리", label: "2020 앤어워드" },
];

const process = [
  { before: "리스트 수동 작성", after: "조건 기반 자동 매칭" },
  { before: "전화·메일 협의", after: "플랫폼 내 원스톱 소통" },
  { before: "수작업 정산", after: "캠페인 완료 시 자동 정산" },
  { before: "매칭마다 인력 증가", after: "규모 확대해도 운영 인력 고정" },
];

export default function KeyProject2() {
  return (
    <section id="project2" className="min-h-screen py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-3">Key Project 2</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            인플루언서 커머스 플랫폼<br />
            <span className="text-purple-400">셀레드 (CELAD)</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            100% 수작업이던 인플루언서 마케팅 프로세스를 Full-Process 자동화 플랫폼으로 재설계.
            인플루언서 25,000명·상품 4,000개 규모로 확장하고 앤어워드 그랑프리를 수상했습니다.
          </p>
        </motion.div>

        {/* 본문 */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">

            {/* 문제 → 해결 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-4">문제 → 해결</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-red-400 text-xs font-bold mt-1 shrink-0">문제</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    광고주-인플루언서 매칭이 100% 수작업. 업무가 늘수록 인력도 늘어나는 비선형 구조.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-3 flex gap-3 items-start">
                  <span className="text-green-400 text-xs font-bold mt-1 shrink-0">해결</span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    요청 등록 → 인플루언서 참여 → 선별 → 진행 → <strong className="text-white">자동 정산</strong>까지 Full-Process 플랫폼화.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Before / After */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-purple-500/20 rounded-2xl p-6"
            >
              <h3 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-4">Before → After</h3>
              <div className="space-y-3">
                {process.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-gray-500 line-through text-xs flex-1">{p.before}</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-green-400 text-xs flex-1 font-medium">{p.after}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 역할 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-3">역할</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                비즈니스 모델 설계 및 광고 등록부터 정산까지의 <strong className="text-white">Full-Process 자동화 설계 및 운영 (PM)</strong>.
                1차 매칭 플랫폼 개발 후 왕홍 마케팅까지 확장 운영,
                2차에는 상품 리소싱으로 인플루언서 커머스로 사업 영역 확장.
              </p>
              <p className="text-gray-400 text-sm mt-3 italic">
                &ldquo;운영 데이터를 새로운 사업 기회로 읽어낸 커머스 확장&rdquo;
              </p>
            </motion.div>
          </div>

          {/* 성과 지표 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-5 text-center">
                  <div className="text-xl font-black text-purple-400 mb-1 leading-tight">{m.value}</div>
                  <div className="text-gray-400 text-xs">{m.label}</div>
                </div>
              ))}
            </div>

            {/* 어워드 */}
            <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-amber-400 font-bold text-lg">2020 앤어워드</div>
              <div className="text-white font-semibold">디지털 미디어 부문 그랑프리</div>
              <div className="text-gray-400 text-xs mt-2">
                국내 최초 광고 마케팅 기업 첫 대상 수상<br />
                과학기술정보통신부 · 한국방송광고진흥공사 후원
              </div>
            </div>
          </motion.div>
        </div>

        {/* 서비스 화면 — 3장 나란히 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-6 text-center">서비스 화면</h3>
          <div className="grid grid-cols-3 gap-4">
            {slides.map((slide) => (
              <div key={slide.label} className="rounded-2xl overflow-hidden bg-[#111827] border border-purple-500/20 flex flex-col">
                {slide.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={slide.src} alt={slide.label} className="w-full object-contain" />
                )}
                <p className="text-center text-gray-500 text-xs py-2 shrink-0">{slide.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
