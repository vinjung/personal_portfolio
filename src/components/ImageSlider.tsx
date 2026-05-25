"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  src?: string;
  label: string;
}

interface ImageSliderProps {
  slides: Slide[];
  accentColor?: "blue" | "purple" | "amber";
  height?: number;
  objectFit?: "cover" | "contain";
}

export default function ImageSlider({ slides, accentColor = "blue", height = 320, objectFit = "cover" }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = () => go((current + 1) % slides.length);

  const accent = {
    blue:   { btn: "bg-blue-600 hover:bg-blue-500",   dot: "bg-blue-500",   dotOff: "bg-white/20" },
    purple: { btn: "bg-purple-600 hover:bg-purple-500", dot: "bg-purple-500", dotOff: "bg-white/20" },
    amber:  { btn: "bg-amber-600 hover:bg-amber-500",  dot: "bg-amber-500",  dotOff: "bg-white/20" },
  }[accentColor];

  return (
    <div className="w-full select-none">
      {/* 슬라이드 */}
      <div className="relative overflow-hidden rounded-2xl bg-[#111827] border border-white/10" style={{ height }}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {slides[current].src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slides[current].src}
                alt={slides[current].label}
                className={`w-full h-full object-${objectFit}`}
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-600">
                <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">{slides[current].label}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* 화살표 */}
        <button
          onClick={prev}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full ${accent.btn} flex items-center justify-center transition-colors`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full ${accent.btn} flex items-center justify-center transition-colors`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 슬라이드 번호 */}
        <span className="absolute bottom-3 right-4 text-xs text-white/40">
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* 도트 */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === current ? `${accent.dot} w-6` : accent.dotOff
            }`}
          />
        ))}
      </div>
    </div>
  );
}
