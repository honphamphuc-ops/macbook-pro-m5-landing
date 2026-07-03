"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featureBlocks } from "@/lib/constants";

export function Features() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-38% 0px -38% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length === 0) return;

      const best = visible.reduce((a, b) =>
        b.intersectionRatio > a.intersectionRatio ? b : a
      );
      const index = featureRefs.current.indexOf(best.target as HTMLDivElement);
      if (index !== -1) setActiveImageIndex(index);
    }, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section bg-[#fafafa] relative z-10 px-6 pb-12 lg:px-8 lg:pb-20">
      {/* Tiêu đề - chỉ hiện trên mobile, tĩnh như bình thường (bản desktop nằm trong lưới bên dưới) */}
      <div className="md:hidden max-w-7xl mx-auto pt-12 pb-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">
            Tính năng nổi bật
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
            Giao thoa hoàn mỹ giữa thiết kế đẳng cấp và hiệu năng không thỏa hiệp.
          </h2>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1.05fr_0.95fr] max-w-6xl mx-auto relative gap-18 items-stretch">
        {/* Tiêu đề - span cả 2 cột, dính chung khung với ảnh/chữ nên cuộn vào/ra đồng bộ với nhau.
            mb-[58vh] (vô hình, dùng margin chứ không phải padding nên không che ảnh phía dưới):
            khối ảnh/chữ cần ~top-180px + cao 64vh mới "hết chỗ" để nhả sticky, trong khi tiêu đề
            tự nhiên chỉ cao ~150-200px nên nhả trễ hơn nhiều -> thêm margin-bottom để tiêu đề
            cũng cần một lượng không gian tương đương, giúp 2 khối nhả sticky gần như cùng lúc
            khi thoát khỏi feature 6. Nếu vẫn lệch, chỉnh tăng/giảm số vh này. */}
        <div className="sticky top-0 z-20 self-start bg-[#fafafa] pt-12 lg:pt-20 pb-6 mb-[58vh] lg:mb-[60vh] md:col-start-1 md:col-span-2 md:row-start-1">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">
              Tính năng nổi bật
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
              Giao thoa hoàn mỹ giữa thiết kế đẳng cấp và hiệu năng không thỏa hiệp.
            </h2>
          </div>
        </div>

        {/* Ảnh - dính lại khi cuộn, đổi theo mục đang active (giữ nguyên cơ chế cũ)
            mt-[180px] để vị trí "chưa dính" (lúc mới vào feature 1 / sắp thoát feature 6)
            đã nằm sẵn dưới tiêu đề, không bị tiêu đề đè lên trong lúc chuyển tiếp */}
        <div className="sticky top-[180px] lg:top-[212px] mt-[180px] lg:mt-[212px] h-[64vh] md:col-start-1 md:row-start-1 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[750px] aspect-[4/3] rounded-[2rem] overflow-hidden">
            {featureBlocks.map((feature, index) => {
              const isActive = activeImageIndex === index;
              return (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-[0.97] pointer-events-none"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out"
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Track ẩn: không hiển thị gì, chỉ tạo chiều dài cuộn tương ứng 6 mục
            và kích hoạt observer để biết mục nào đang active */}
        <div className="md:col-start-2 md:row-start-1 flex flex-col">
          {featureBlocks.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="min-h-[52vh]"
            />
          ))}
          {/* Đệm cuối: không gắn ref (không tính vào observer), chỉ tạo thêm
              chiều dài cuộn để feature cuối (feature 6) có đủ chỗ "nhả" sticky
              một cách mượt mà, tránh bị giật/che khi thoát khỏi section */}
          <div aria-hidden className="min-h-[30vh]" />
        </div>

        {/* Chữ - giờ cũng dính lại (sticky) y hệt ảnh, đổi nội dung theo mục
            đang active thay vì cuộn qua như trước.
            mt-[180px] để đồng bộ với khối ảnh, tránh bị tiêu đề đè lúc vào/ra feature 1,6 */}
        <div className="sticky top-[180px] lg:top-[212px] mt-[180px] lg:mt-[212px] h-[64vh] md:col-start-2 md:row-start-1 flex items-center justify-start">
          <div className="relative w-full max-w-md h-full">
            {featureBlocks.map((feature, index) => {
              const isActive = activeImageIndex === index;
              return (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary-blue font-mono font-bold text-3xl tracking-wider">{feature.order}</span>
                    <div
                      className={`h-[2px] bg-primary-blue transition-all duration-500 rounded-full ${
                        isActive ? "w-12" : "w-6 opacity-30"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-text-heading mb-3 tracking-tight leading-[1.25]">
                    {feature.title}
                  </h3>

                  <p className="text-[15px] text-text-body leading-relaxed mb-8 font-medium">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-6">
        {featureBlocks.map((feature) => (
          <div
            key={feature.id}
            className="border border-black/[0.04] rounded-[2rem] p-6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.01)]"
          >
            <div className="relative w-full h-44 bg-background-alt rounded-2xl mb-5 overflow-hidden border border-black/[0.02]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="w-full">
              <h3 className="text-lg font-extrabold text-text-heading mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[13px] text-text-body leading-relaxed mb-5 font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}