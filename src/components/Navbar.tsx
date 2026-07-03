"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "top", label: "Giới thiệu" },
  { id: "features", label: "Tính năng" },
  { id: "specs", label: "Thông số" },
  { id: "newsletter", label: "Đăng ký" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const pickActiveSection = () => {
      const markerY = window.innerHeight * 0.45;
      const nextSection =
        sectionElements.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= markerY && rect.bottom >= markerY;
        }) ??
        sectionElements
          .filter((section) => section.getBoundingClientRect().top <= markerY)
          .at(-1);

      if (nextSection) {
        setActiveId((currentId) =>
          currentId === nextSection.id ? currentId : nextSection.id,
        );
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: Array.from({ length: 11 }, (_, index) => index / 10),
    };

    const observer = new IntersectionObserver(pickActiveSection, observerOptions);

    sectionElements.forEach((section) => observer.observe(section));
    pickActiveSection();

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Nút hamburger: bám sát mép trên, có nền mờ + safe-area để không bị
          che khuất bởi tai thỏ/thanh trạng thái và luôn nổi rõ trên mọi nền */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((current) => !current)}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
        className="fixed right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-border-custom bg-white/90 shadow-md backdrop-blur-md transition-transform duration-200 ease-out active:scale-90 lg:hidden"
        style={{ top: "max(1.25rem, env(safe-area-inset-top))" }}
      >
        <span
          className={`absolute h-[2px] w-5 bg-text-heading transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-[2px] w-5 bg-text-heading transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute h-[2px] w-5 bg-text-heading transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {/* Overlay full-screen: chuyển động scale + blur thay vì chỉ opacity,
          các mục menu xuất hiện tuần tự (stagger) để đỡ trống trải và mượt hơn */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        {/* Đốm sáng trang trí cho đỡ trống, không ảnh hưởng thao tác */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-blue/10 blur-3xl" />

        <div className="flex w-full flex-col items-center gap-10 px-8">
          <span
            className={`text-xs font-bold uppercase tracking-[0.3em] text-primary-blue/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "60ms" : "0ms" }}
          >
            NovaTech
          </span>

          <div className="space-y-8 text-center">
            {navItems.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-2xl font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "text-primary-blue" : "text-text-heading"
                  } ${
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 60 + 120}ms` : "0ms",
                  }}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <nav
        aria-label="Điều hướng trang"
        className="hidden lg:fixed lg:right-6 lg:top-1/2 lg:z-50 lg:flex lg:-translate-y-1/2 lg:flex-col lg:items-end lg:gap-7"
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex h-5 w-36 appearance-none items-center justify-end gap-3 rounded-full bg-transparent p-0 outline-none"
              aria-label={`Đến mục ${item.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`pointer-events-none w-20 translate-x-2 text-right text-sm font-medium opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 ${
                  isActive ? "text-primary-blue" : "text-text-body"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`h-[4px] rounded-full transition-all duration-300 ${
                  isActive ? "w-12 bg-primary-blue" : "w-6 bg-[#E5E9F0]"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}