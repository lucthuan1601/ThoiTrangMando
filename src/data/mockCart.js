// src/data/mockCart.js
import shirtImg from '@/assets/images/somi.png'; 
// Lưu ý: Thay đổi đường dẫn ảnh trên cho đúng với tên file ảnh áo sơ mi bạn cất trong assets/images

export const initialCart = [
  {
    id: 1,
    name: 'Áo Sơ Mi Oxford Trắng',
    color: 'Trắng',
    size: 'L',
    price: 350000,
    quantity: 1,
    image: shirtImg
  },
  {
    id: 2,
    name: 'Áo Sơ Mi Oxford Xám',
    color: 'Xám',
    size: 'L',
    price: 350000,
    quantity: 1,
    image: shirtImg
  }
];
