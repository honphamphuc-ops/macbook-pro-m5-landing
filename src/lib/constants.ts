export type FeatureItem = {
  title: string;
  description: string;
  icon: "Cpu" | "Monitor" | "Battery" | "Camera" | "Wifi" | "Fingerprint";
};

export type SpecItem = {
  label: string;
  value: string;
};

export const features: FeatureItem[] = [
  {
    title: "Chip Apple M5",
    description:
      "CPU 10 nhân, GPU 10 nhân tích hợp Neural Accelerator, tăng tốc AI.",
    icon: "Cpu",
  },
  {
    title: "Màn hình Liquid Retina XDR",
    description:
      "14.2 inch, độ sáng đỉnh 1600 nits, tỉ lệ tương phản 1.000.000:1.",
    icon: "Monitor",
  },
  {
    title: "Pin cả ngày dài",
    description: "Sử dụng liên tục lên đến 24 giờ.",
    icon: "Battery",
  },
  {
    title: "Camera & Âm thanh",
    description: "Camera Center Stage 12MP, hệ thống 6 loa Spatial Audio.",
    icon: "Camera",
  },
  {
    title: "Kết nối đa dạng",
    description: "Wi-Fi 6E, 3 cổng Thunderbolt 4, HDMI, khe thẻ SDXC.",
    icon: "Wifi",
  },
  {
    title: "Bảo mật & Thiết kế",
    description:
      "Touch ID, Magic Keyboard, trackpad Force Touch, vỏ nhôm tái chế.",
    icon: "Fingerprint",
  },
];

export const specs: SpecItem[] = [
  { label: "Chip", value: "Apple M5" },
  { label: "Neural Engine", value: "16 nhân" },
  { label: "Bộ nhớ hợp nhất", value: "Tối đa 32GB" },
  { label: "Lưu trữ", value: "512GB / 1TB (tùy chọn đến 4TB)" },
  { label: "Màn hình", value: "14.2\" Liquid Retina XDR" },
  { label: "Pin", value: "Lên đến 24 giờ" },
  { label: "Camera", value: "12MP Center Stage" },
  { label: "Kết nối", value: "Wi-Fi 6E, Bluetooth 5.3, 3× Thunderbolt 4" },
  { label: "Cổng", value: "MagSafe 3, HDMI, SDXC" },
  { label: "Màu sắc", value: "Bạc, Đen Space Black" },
];
