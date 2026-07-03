"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewsletterSchema, type NewsletterFormValues } from "@/lib/validations";

export function NewsletterForm() {
  // Quản lý trạng thái và nội dung của popup thông báo
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: { email: "" },
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    // Tự động tắt thông báo sau 3.5 giây
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const onSubmit = async (values: NewsletterFormValues) => {
    try {
      await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });
      showToast("🎉 Đăng ký thành công! Cảm ơn bạn đã quan tâm.", "success");
      reset();
    } catch {
      showToast("⚠️ Có lỗi xảy ra khi gửi. Vui lòng thử lại sau.", "error");
    }
  };

  return (
    <section id="newsletter" className="relative bg-background-alt px-6 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border-custom bg-white p-8 shadow-sm sm:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-blue">
            Nhận thông tin mới
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl">
            Đăng ký để nhận tin tức về MacBook Pro M5 sớm nhất.
          </h2>
          <p className="mt-4 text-lg text-text-body">
            Chúng tôi chỉ gửi các cập nhật hữu ích, không spam và luôn tôn trọng quyền riêng tư của bạn.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-xl">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-heading">
            Địa chỉ email
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-border-custom px-4 py-3 text-sm outline-none ring-0 transition focus:border-primary-blue"
              {...register("email")}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-w-max rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
            >
              {isSubmitting ? "Đang gửi..." : "Đăng ký"}
            </button>
          </div>
          {errors.email ? (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          ) : null}
        </form>
      </div>
      
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-xl px-5 py-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-5 fade-in ${
            toast.type === "success"
              ? "bg-white border-l-4 border-emerald-500 text-text-heading"
              : "bg-white border-l-4 border-red-500 text-text-heading"
          }`}
        >
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}
    </section>
  );
}