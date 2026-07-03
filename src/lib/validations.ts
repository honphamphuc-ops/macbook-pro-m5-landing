import { z } from "zod";

export const NewsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email không được để trống")
    .max(255, "Email quá dài, vui lòng nhập dưới 255 ký tự")
    .email("Địa chỉ email không hợp lệ")
    .toLowerCase(), // Tự động chuẩn hóa email về chữ thường
});

export type NewsletterFormValues = z.infer<typeof NewsletterSchema>;