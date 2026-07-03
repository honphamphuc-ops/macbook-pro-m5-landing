# MacBook Pro M5 Landing

Một landing page Next.js cho sản phẩm MacBook Pro M5, xây dựng với Tailwind CSS, `next/font`, và các thành phần React.

## Tổng quan

- `src/app/page.tsx`: trang chính của ứng dụng.
- `src/components/Navbar.tsx`: navbar desktop + mobile responsive.
- `src/components/Hero.tsx`: phần hero đầu trang.
- `src/components/Features.tsx`: section tính năng nổi bật với ảnh và nội dung động.
- `src/components/Specs.tsx`: bảng thông số kỹ thuật.
- `src/components/NewsletterForm.tsx`: form đăng ký nhận tin và toast xác nhận.
- `src/lib/constants.ts`: dữ liệu tính năng và thông số.

## Cài đặt

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem trang.

## Công nghệ chính

- Next.js 16
- React 19
- Tailwind CSS 4
- `next-themes`
- `react-hook-form` + `zod`
- `framer-motion`
- `lucide-react`

## Xây dựng & triển khai

```bash
npm run build
npm run start
```

Triển khai dễ nhất với Vercel hoặc bất kỳ nền tảng hỗ trợ ứng dụng Next.js.

## Ghi chú

- Dự án đã dùng `next/font` để load font Geist.
- `src/components/Features.tsx` hiện lấy nội dung từ `src/lib/constants.ts`.
- Thiết kế support desktop và mobile, bao gồm menu hamburger và scroll spy.
