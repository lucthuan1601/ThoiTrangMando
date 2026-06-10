export const ORDER_STATUS = {
  cho_xac_nhan: {
    label: "Chờ xác nhận",
    color: "#888",
    bg: "#f5f5f5",
    dot: "#888",
    canCancel: true,
  },
  dang_giao: {
    label: "Đang giao",
    color: "#1a6fdb",
    bg: "#e8f1fd",
    dot: "#1a6fdb",
    canCancel: false,
  },
  da_nhan: {
    label: "Đã nhận",
    color: "#16a34a",
    bg: "#dcfce7",
    dot: "#16a34a",
    canCancel: false,
  },
  cho_danh_gia: {
    label: "Chờ đánh giá",
    color: "#d97706",
    bg: "#fef9c3",
    dot: "#d97706",
    canCancel: false,
  },
  da_danh_gia: {
    label: "Đã đánh giá",
    color: "#16a34a",
    bg: "#dcfce7",
    dot: "#16a34a",
    canCancel: false,
  },
  da_huy: {
    label: "Đã hủy",
    color: "#dc2626",
    bg: "#fee2e2",
    dot: "#dc2626",
    canCancel: false,
  },
};

export const TAB_FILTERS = [
  { key: "tat_ca", label: "Tất cả" },
  { key: "cho_xac_nhan", label: "Chờ xác nhận" },
  { key: "dang_giao", label: "Đang giao" },
  { key: "da_nhan", label: "Đã nhận" },
  { key: "cho_danh_gia", label: "Chờ đánh giá" },
  { key: "da_danh_gia", label: "Đánh giá" },
];
