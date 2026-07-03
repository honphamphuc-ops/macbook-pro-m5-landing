import Image from "next/image";

const heroImageUrl =
  "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044633/heqmunbdptm9qhesm95d.webp";

export function Hero() {
  return (
    <section id="top" className="px-6 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="flex max-w-2xl flex-col items-start">
          <div className="flex flex-col items-start gap-3">
            <span className="text-2xl font-semibold leading-none tracking-tight text-text-heading sm:text-3xl">
              MacBook Pro 
            </span>
            <span className="inline-flex rounded-full border border-primary-blue-light bg-primary-blue-light px-4 py-2 text-sm font-medium text-primary-blue">
              Mới - Chip Apple M5
            </span>
            <span className="h-px w-24 bg-primary-blue/30" />
          </div>
          <h1 className="mt-8 text-3xl font-semibold leading-[1.1] tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
            Hiệu năng đột phá. Sức mạnh chip M5.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-text-body sm:text-lg sm:leading-8">
            Tạo ra trải nghiệm làm việc liền mạch, sáng tạo không giới hạn và hiệu suất vượt trội trong một thiết kế mỏng nhẹ, tinh tế.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#newsletter"
              className="rounded-full bg-primary-blue px-7 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#2563eb]"
            >
              Đăng ký nhận tin
            </a>
            <a
              href="#features"
              className="rounded-full border border-border-custom bg-white px-7 py-3 text-center text-sm font-semibold text-text-heading transition hover:border-primary-blue hover:text-primary-blue"
            >
              Khám phá tính năng
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent sm:aspect-[16/12] lg:aspect-[16/12]">
            <Image
              src={heroImageUrl}
              alt="MacBook Pro M5"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}