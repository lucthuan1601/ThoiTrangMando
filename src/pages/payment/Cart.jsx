import { useState, useEffect } from "react";
// 1. Import useNavigate từ react-router-dom
import { useNavigate } from "react-router-dom"; 

const INITIAL_PRODUCTS = [
  { id: 1, name: "Áo Thun Premium Mando", price: 300000, size: "L", color: "Đen", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=150" },
  { id: 2, name: "Quần Khaki Slimfit Mando", price: 450000, size: "XL", color: "Be", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=150" }
];

export default function Cart() { // Bỏ prop onNavigateToCheckout cũ đi
  const navigate = useNavigate(); // 2. Khai báo hook navigate

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("mando_cart");
    return savedCart ? JSON.parse(savedCart) : INITIAL_PRODUCTS.map(p => ({ ...p, quantity: 1, selected: true }));
  });

  useEffect(() => {
    localStorage.setItem("mando_cart", JSON.stringify(cart));
  }, [cart]);

  // ... Các hàm updateQuantity, toggleSelectProduct, deleteProduct giữ nguyên ...

  const selectedItems = cart.filter(item => item.selected);
  const subTotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // 3. Cập nhật hàm xử lý khi nhấn nút tiến hành thanh toán
  const handleProceedCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Vui lòng chọn ít nhất một sản phẩm để tiến hành thanh toán!");
      return;
    }
    // Chuyển hướng sang router /checkout
    navigate("/checkout"); 
  }

  return (
    <div className="bg-[#f4f4f4] min-h-screen flex items-start justify-center py-8 font-sans antialiased text-gray-900">
      <main className="max-w-[1100px] w-full px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-black mb-6">
          Giỏ hàng thương mại của bạn ({cart.length})
        </p>

        {cart.length === 0 ? (
          <div className="bg-white border border-gray-200 p-8 text-center">
            <p className="text-xs text-gray-400 mb-4">Không có sản phẩm nào trong giỏ hàng.</p>
            <button 
              onClick={() => setCart(INITIAL_PRODUCTS.map(p => ({ ...p, quantity: 1, selected: true })))} 
              className="py-2.5 px-6 bg-black text-white text-xs font-bold uppercase tracking-widest"
            >
              Tải lại sản phẩm mặc định
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            {/* DANH SÁCH SẢN PHẨM BÊN TRÁI */}
            <div className="flex-1 w-full bg-white border border-gray-200 p-6 shadow-sm">
              <div className="hidden sm:grid grid-cols-12 text-[10px] font-bold text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-100 mb-4">
                <div className="col-span-6">Sản phẩm</div>
                <div className="col-span-2 text-center">Đơn giá</div>
                <div className="col-span-2 text-center">Số lượng</div>
                <div className="col-span-2 text-right">Tổng cộng</div>
              </div>

              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    
                    {/* Checkbox + Ảnh + Thông tin */}
                    <div className="col-span-12 sm:col-span-6 flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={item.selected} 
                        onChange={() => toggleSelectProduct(item.id)}
                        className="accent-black w-4 h-4 cursor-pointer flex-shrink-0"
                      />
                      <div className="w-14 h-16 bg-[#e5e7eb] flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-900 leading-snug truncate">{item.name}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Size: {item.size} &nbsp;|&nbsp; Màu: {item.color}</p>
                        <button onClick={() => deleteProduct(item.id)} className="text-[10px] text-red-500 hover:underline font-medium mt-1 block">Xóa</button>
                      </div>
                    </div>

                    {/* Đơn giá */}
                    <div className="col-span-4 sm:col-span-2 sm:text-center text-xs text-gray-800 font-medium">
                      <span className="sm:hidden text-[9px] text-gray-400 uppercase block font-bold">Giá:</span>
                      {item.price.toLocaleString()}đ
                    </div>

                    {/* Số lượng */}
                    <div className="col-span-4 sm:col-span-2 flex sm:justify-center">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-5 h-5 border border-gray-300 text-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">-</button>
                        <span className="text-xs font-bold text-gray-800 w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-5 h-5 border border-gray-300 text-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">+</button>
                      </div>
                    </div>

                    {/* Tổng cộng mặt hàng */}
                    <div className="col-span-4 sm:col-span-2 text-right text-xs font-bold text-gray-900">
                      <span className="sm:hidden text-[9px] text-gray-400 uppercase block font-bold">Tổng:</span>
                      {(item.price * item.quantity).toLocaleString()}đ
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* HỘP TÓM TẮT ĐƠN HÀNG BÊN PHẢI */}
            <div className="w-full md:w-[350px] bg-white border border-gray-200 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-black mb-3 pb-1.5 border-b border-gray-100">Giá trị đơn hàng</p>
              <div className="space-y-2 text-[11px] mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sản phẩm đã chọn</span>
                  <span className="font-semibold text-gray-900">{selectedItems.length} mục</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100 text-xs font-black text-black">
                  <span>TỔNG ĐƠN HÀNG</span>
                  <span>{subTotal.toLocaleString()}đ</span>
                </div>
              </div>
              
              <button
                onClick={handleProceedCheckout}
                className="w-full py-3 bg-black hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all shadow-sm"
              >
                TIẾN HÀNH THANH TOÁN →
              </button>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}