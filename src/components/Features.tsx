"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FeatureBlock {
  id: number;
  order: string;
  title: string;
  description: string;
  image: string;
}

const featureBlocks: FeatureBlock[] = [
  {
    id: 1,
    order: "01",
    title: "Chip Apple M5 vươn tầm",
    description: "CPU 10 nhân, GPU 10 nhân tích hợp Neural Accelerator mạnh mẽ, tối ưu hoàn hảo cho các tác vụ trí tuệ nhân tạo (AI) thế hệ mới.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044657/ast8bcftzgpx8dkotsyv.webp",
  },
  {
    id: 2,
    order: "02",
    title: "Màn hình Liquid Retina XDR",
    description: "Kích thước 14.2 inch, độ sáng cực đỉnh 1600 nits cùng tỷ lệ tương phản 1.000.000:1 mang lại trải nghiệm thị giác sống động.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044699/zd8icpbkff7yb1vf4qzd.webp",
  },
  {
    id: 3,
    order: "03",
    title: "Thời lượng pin chạm đỉnh",
    description: "Sẵn sàng đồng hành cùng bạn suốt 24 giờ liên tục. Làm việc, giải trí và sáng tạo bất tận mà không cần mang theo bộ sạc.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044744/gqs2omkrifn4kdwmjokb.webp",
  },
  {
    id: 4,
    order: "04",
    title: "Camera Center Stage & Âm thanh",
    description: "Camera Center Stage 12MP thông minh tự động kết nối khung hình, hòa quyện cùng hệ thống 6 loa Spatial Audio đỉnh cao.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044630/rdgjwc2huuscdykjxsw5.webp",
  },
  {
    id: 5,
    order: "05",
    title: "Kết nối không giới hạn",
    description: "Trang bị Wi-Fi 6E siêu tốc, kết hợp bộ ba cổng kết nối Thunderbolt 4, HDMI mang lại sự linh hoạt tối đa cho mọi công việc.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044655/mgouslv4awzjpft8ep7j.webp",
  },
  {
    id: 6,
    order: "06",
    title: "Bảo mật & Trải nghiệm gõ",
    description: "Cảm biến một chạm Touch ID an toàn, kết hợp bàn phím Magic Keyboard êm ái cùng trackpad Force Touch phản hồi chính xác.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044640/p5cijux4b8401znskdpf.webp",
  },
];

export function Features() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
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
    <section id="features" className="features-section bg-[#fafafa] relative z-10 px-6 py-12 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">
            Tính năng nổi bật
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
            Thiết kế cho hiệu suất. Không thỏa hiệp.
          </h2>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[1.05fr_0.95fr] max-w-6xl mx-auto relative gap-18 items-stretch">
        <div className="sticky top-[12vh] h-[76vh] flex items-center justify-center overflow-hidden">
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

        <div className="bg-transparent flex flex-col justify-center">
          {featureBlocks.map((feature, index) => {
            const isActive = activeImageIndex === index;
            return (
              <div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
                className="min-h-[70vh] flex items-center justify-start"
              >
                <div
                  className={`w-full max-w-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
                    isActive ? "translate-x-0 opacity-100" : "translate-x-0 opacity-20"
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
              </div>
            );
          })}
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
              <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-text-heading backdrop-blur-md">
                {feature.order}
              </span>
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