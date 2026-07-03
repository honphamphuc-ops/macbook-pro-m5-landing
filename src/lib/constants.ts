export type FeatureBlock = {
  id: number;
  order: string;
  title: string;
  description: string;
  image: string;
};

export type SpecItem = {
  label: string;
  value: string;
};

export const featureBlocks: FeatureBlock[] = [
  {
    id: 1,
    order: "01",
    title: "Chip Apple M5 vươn tầm",
    description: "Sức mạnh phi thường từ CPU 10 nhân và GPU 10 nhân kiến trúc mới, kết hợp cùng Neural Accelerator tối tân. Dù bạn đang huấn luyện các mô hình AI phức tạp, xử lý dữ liệu hệ thống gợi ý (Recommender Systems) hay biên dịch mã nguồn dự án Next.js quy mô lớn, mọi tác vụ đều được xử lý với tốc độ chớp nhoáng và độ trễ gần như bằng không.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044657/ast8bcftzgpx8dkotsyv.webp",
  },
  {
    id: 2,
    order: "02",
    title: "Màn hình Liquid Retina XDR",
    description: "Màn hình 14.2 inch được căn chỉnh hoàn hảo với độ sáng rực rỡ lên đến 1600 nits và tỷ lệ tương phản 1.000.000:1. Cung cấp dải màu chuẩn điện ảnh, mang lại không gian làm việc lý tưởng để thiết kế giao diện, lập trình frontend hay chỉnh sửa đồ họa chuyên nghiệp với độ chi tiết sắc nét đến từng điểm ảnh.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044699/zd8icpbkff7yb1vf4qzd.webp",
  },
  {
    id: 3,
    order: "03",
    title: "Thời lượng pin chạm đỉnh",
    description: "Tự do làm việc ở bất cứ đâu với thời lượng pin không tưởng lên đến 24 giờ. Kiến trúc chip M5 tối ưu năng lượng xuất sắc giúp bạn thoải mái chạy các môi trường ảo hóa (Containerization/Docker), triển khai web hay coding liên tục suốt ngày dài mà không phải lo lắng về việc tìm kiếm ổ cắm điện.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044744/gqs2omkrifn4kdwmjokb.webp",
  },
  {
    id: 4,
    order: "04",
    title: "Camera Center Stage & Âm thanh",
    description: "Nâng tầm chất lượng các cuộc họp trực tuyến với Camera 12MP tích hợp công nghệ Center Stage, tự động giữ bạn luôn ở trung tâm khung hình. Hệ thống 6 loa hỗ trợ Spatial Audio mang đến âm thanh vòm không gian ba chiều sống động, tái tạo trải nghiệm thính giác chân thực tuyệt đối cho công việc lẫn giải trí.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044630/rdgjwc2huuscdykjxsw5.webp",
  },
  {
    id: 5,
    order: "05",
    title: "Kết nối không giới hạn",
    description: "Được trang bị chuẩn Wi-Fi 6E siêu tốc, đảm bảo đường truyền mạng luôn ổn định khi truy cập server hay đẩy code lên GitHub. Ba cổng Thunderbolt 4 đa năng cho phép truyền dữ liệu tốc độ cực cao, kết hợp cùng cổng HDMI và khe thẻ nhớ SDXC mang lại khả năng mở rộng không giới hạn với mọi thiết bị ngoại vi.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044655/mgouslv4awzjpft8ep7j.webp",
  },
  {
    id: 6,
    order: "06",
    title: "Bảo mật & Trải nghiệm gõ",
    description: "Bảo vệ an toàn tuyệt đối mọi dữ liệu cá nhân và mã nguồn dự án của bạn với cảm biến vân tay Touch ID thế hệ mới. Bàn phím Magic Keyboard với hành trình phím tối ưu mang lại cảm giác gõ êm ái, kết hợp cùng trackpad Force Touch siêu rộng hỗ trợ các thao tác vuốt chạm đa điểm mượt mà và chuẩn xác nhất.",
    image: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044640/p5cijux4b8401znskdpf.webp",
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
