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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
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
  );
}
