// src/utils/formatCurrency.js
export const formatCurrency = (value) => {
  if (!value) return '0';
  return new Intl.NumberFormat('vi-VN').format(value);
};