export const mockOrders = [
  {
    id: "MD1024",
    date: "2024-10-12",
    status: "cho_xac_nhan",
    items: [
      {
        id: 1,
        name: "Áo Sơ Mi Cotton Basic - Trắng",
        size: "L",
        quantity: 1,
        price: 330000,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200&q=80",
      },
    ],
    total: 330000,
    shippingAddress: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    paymentMethod: "Thanh toán khi nhận hàng",
  },
  {
    id: "MD1019",
    date: "2024-10-05",
    status: "dang_giao",
    items: [
      {
        id: 2,
        name: "Quần Âu Relaxed Fit - Xanh Navy",
        size: "32",
        quantity: 1,
        price: 550000,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=80",
      },
    ],
    total: 550000,
    shippingAddress: "45 Lê Lợi, Quận 3, TP.HCM",
    paymentMethod: "Chuyển khoản ngân hàng",
  },
  {
    id: "MD1015",
    date: "2024-09-28",
    status: "da_nhan",
    items: [
      {
        id: 3,
        name: "Áo Polo Pique - Đen",
        size: "M",
        quantity: 2,
        price: 290000,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=200&q=80",
      },
    ],
    total: 580000,
    shippingAddress: "78 Đinh Tiên Hoàng, Quận Bình Thạnh, TP.HCM",
    paymentMethod: "Thanh toán khi nhận hàng",
  },
  {
    id: "MD1010",
    date: "2024-09-15",
    status: "cho_danh_gia",
    items: [
      {
        id: 4,
        name: "Quần Short Kaki - Be",
        size: "M",
        quantity: 1,
        price: 250000,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=200&q=80",
      },
      {
        id: 5,
        name: "Áo Thun Basic - Xám",
        size: "L",
        quantity: 1,
        price: 199000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
      },
    ],
    total: 449000,
    shippingAddress: "12 Võ Văn Tần, Quận 3, TP.HCM",
    paymentMethod: "Thanh toán khi nhận hàng",
  },
  {
    id: "MD1005",
    date: "2024-09-01",
    status: "da_danh_gia",
    items: [
      {
        id: 6,
        name: "Blazer Casual Navy",
        size: "L",
        quantity: 1,
        price: 890000,
        image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=200&q=80",
      },
    ],
    total: 890000,
    rating: 5,
    review: "Chất vải rất tốt, form dáng chuẩn. Sẽ ủng hộ shop dài dài!",
    shippingAddress: "99 Cách Mạng Tháng 8, Quận 10, TP.HCM",
    paymentMethod: "Chuyển khoản ngân hàng",
  },
];

export const suggestedProducts = [
  {
    id: 101,
    name: "Quần Tây Slim-fit Black",
    price: 450000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
  },
  {
    id: 102,
    name: "Blazer Casual Navy",
    price: 890000,
    image: "https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=400&q=80",
  },
  {
    id: 103,
    name: "Áo Sơ Mi Oxford Trắng",
    price: 380000,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80",
  },
  {
    id: 104,
    name: "Áo Thun Oversize Đen",
    price: 220000,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
  },
];

export const cancelReasons = [
  "Tôi muốn thay đổi địa chỉ giao hàng",
  "Tôi muốn thay đổi sản phẩm / size",
  "Tôi tìm được sản phẩm khác tốt hơn",
  "Giá quá cao so với mong đợi",
  "Thời gian giao hàng quá lâu",
  "Đặt nhầm sản phẩm",
  "Lý do khác",
];
