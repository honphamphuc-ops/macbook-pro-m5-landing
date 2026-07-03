import { specs } from "@/lib/constants";

export function Specs() {
  return (
    <section id="specs" className="px-6 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">
            Thông số kỹ thuật
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
            Cấu hình tối thượng, sẵn sàng tùy biến cho mọi luồng công việc phức tạp nhất.
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border-custom bg-white shadow-sm">
          <dl className="divide-y divide-border-custom">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-sm font-semibold text-text-heading">{spec.label}</dt>
                <dd className="text-sm text-text-body">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}