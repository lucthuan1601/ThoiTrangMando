import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QrIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="7" height="7" rx="0.5" />
    <rect x="15" y="2" width="7" height="7" rx="0.5" />
    <rect x="2" y="15" width="7" height="7" rx="0.5" />
    <path d="M15 15h2v2h-2zm4 4h3v3h-3zm0-4h3v2h-3zm-4 4h2v3h-2zm4-2h1v1h-1zm-2 1h1v1h-1z" fill="currentColor"/>
    <rect x="4" y="4" width="3" height="3" fill="currentColor" />
    <rect x="17" y="4" width="3" height="3" fill="currentColor" />
    <rect x="4" y="17" width="3" height="3" fill="currentColor" />
  </svg>
);

function Field({ id, label, type = "text", value, onChange, onBlur, error, maxLength, textarea }) {
  return (
    <div className="mb-4 last:mb-0">
      <label htmlFor={id} className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
        {label} {type !== "tel" && id !== "note" && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className="w-full px-3 py-2 border border-gray-200 text-xs text-gray-800 bg-white outline-none focus:border-black resize-none h-20 transition-all rounded-none"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`w-full px-3 py-2.5 border text-xs text-gray-800 bg-white outline-none focus:border-black transition-all rounded-none ${
            error ? "border-red-500 bg-red-50/50" : "border-gray-200"
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
        />
      )}
      {error && <p className="text-[10px] text-red-500 font-medium mt-1">⚠️ {error}</p>}
    </div>
  );
}

const validators = {
  name:  v => v.trim().length > 0 ? null : "Vui lòng nhập họ và tên của bạn.",
  phone: v => /^0\d{9}$/.test(v.trim()) ? null : "Số điện thoại không hợp lệ (yêu cầu 10 số bắt đầu bằng 0).",
  addr:  v => v.trim().length > 5 ? null : "Vui lòng nhập địa chỉ nhận hàng chi tiết.",
};

export default function CheckOut() {
  const navigate = useNavigate(); 
  
  const [screen, setScreen] = useState("checkout"); 
  const [showQR, setShowQR] = useState(false);
  const [payMethod, setPay] = useState("qr");
  const [orderId, setOrderId] = useState("");
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("mando_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [form, setForm] = useState({ 
    name: "Nguyễn Thế Trưởng", 
    phone: "0987654321", 
    addr: "Số 178 Tây Sơn, Đống Đa, Hà Nội", 
    note: "Giao giờ hành chính giúp em" 
  });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    localStorage.setItem("mando_cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, delta) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const selectedItems = cart.filter(item => item.selected);
  const subTotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 0; 
  const totalAmount = subTotal + shippingFee;

  const getError = f => touched[f] ? validators[f]?.(form[f]) : null;
  const handleChange = f => e => setForm(p => ({ ...p, [f]: e.target.value }));
  const handleBlur = f => () => setTouched(p => ({ ...p, [f]: true }));

  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert("Đơn hàng trống hoặc chưa có sản phẩm nào được chọn!");
      return;
    }
    setTouched({ name: true, phone: true, addr: true });
    if (["name", "phone", "addr"].some(f => validators[f](form[f]))) return;
    
    setOrderId("MND-" + Math.floor(100000 + Math.random() * 900000));
    payMethod === "qr" ? setShowQR(true) : setScreen("success");
  };

  const confirmPayment = () => {
    setShowQR(false);
    setScreen("success");
  };

  const RenderOrderDetails = () => (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-black mb-4 pb-2 border-b border-gray-100">
        {screen === "success" ? "Tóm tắt đơn hàng" : "Đơn hàng của bạn"} ({selectedItems.length})
      </p>
      
      {selectedItems.length === 0 ? (
        <p className="text-xs text-gray-400 py-4 text-center">Chưa có sản phẩm nào được chọn.</p>
      ) : (
        <div className="max-h-[240px] overflow-y-auto space-y-4 pr-1 mb-4">
          {selectedItems.map(item => (
            <div key={item.id} className="flex items-start gap-3.5 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-14 h-16 bg-[#e5e7eb] flex items-center justify-center overflow-hidden rounded-none flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 leading-snug truncate">{item.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Size: {item.size} &nbsp;|&nbsp; Màu: {item.color}</p>
                
                {screen === "checkout" && (
                  <div className="flex items-center gap-2 mt-1.5">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-5 h-5 border border-gray-300 text-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">-</button>
                    <span className="text-xs font-bold text-gray-800 w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-5 h-5 border border-gray-300 text-gray-600 flex items-center justify-center text-xs hover:bg-gray-100">+</button>
                  </div>
                )}
                {screen === "success" && (
                  <p className="text-[10px] text-gray-400 mt-0.5">Size: {item.size} | SL: {item.quantity}</p>
                )}
              </div>
              <p className="text-xs font-bold text-gray-900 whitespace-nowrap">{(item.price * item.quantity).toLocaleString()}đ</p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2 text-[11px] py-2 border-t border-gray-100">
        <div className="flex justify-between">
          <span className="text-gray-400">Tạm tính</span>
          <span className="font-semibold text-gray-900">{subTotal.toLocaleString()}đ</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Phí vận chuyển</span>
          <span className="font-semibold text-green-600">{shippingFee === 0 ? "Miễn phí" : `${shippingFee}đ`}</span>
        </div>
      </div>

      <div className="flex justify-between text-[13px] font-black text-black mt-3 pt-3 border-t border-gray-200 mb-2">
        <span>Tổng cộng</span>
        <span>{totalAmount.toLocaleString()}đ</span>
      </div>
    </>
  );

  return (
    <div className="bg-[#f4f4f4] min-h-screen flex items-start justify-center py-8 font-sans antialiased text-gray-900">
      
      {screen === "checkout" && (
        <main className="max-w-[1100px] w-full px-4 flex flex-col md:flex-row gap-6 items-start">
          
          <div className="flex-1 w-full bg-white border border-gray-200 p-6 rounded-none shadow-sm">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wider text-black">Thông tin giao hàng</p>
              <button 
                onClick={() => navigate("/cart")}
                className="text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-wider"
              >
                ← Quay lại giỏ hàng
              </button>
            </div>
            <Field id="name" label="Họ tên" value={form.name} onChange={handleChange("name")} onBlur={handleBlur("name")} error={getError("name")} />
            <Field id="phone" label="Số điện thoại" value={form.phone} onChange={handleChange("phone")} onBlur={handleBlur("phone")} error={getError("phone")} type="tel" maxLength={10} />
            <Field id="addr" label="Địa chỉ" value={form.addr} onChange={handleChange("addr")} onBlur={handleBlur("addr")} error={getError("addr")} />
            <Field id="note" label="Ghi chú thêm" value={form.note} onChange={handleChange("note")} textarea />
          </div>

          <div className="w-full md:w-[380px] flex flex-col gap-4">
            <div className="bg-white border border-gray-200 p-5 rounded-none shadow-sm">
              <RenderOrderDetails />

              <p className="text-xs font-bold uppercase tracking-wider text-black mb-3 pb-1.5 border-b border-gray-100">Phương thức thanh toán</p>
              <div className={`flex items-center gap-3 p-3 mb-2.5 border cursor-pointer transition-all rounded-none ${payMethod === "qr" ? "border-black bg-gray-50/70" : "border-gray-200 hover:bg-gray-50/50"}`} onClick={() => setPay("qr")}>
                <input type="radio" name="pay" readOnly checked={payMethod === "qr"} className="accent-black w-3.5 h-3.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-950">Chuyển khoản ngân hàng (Quét mã VietQR)</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">An toàn và không cần điền nội dung</p>
                </div>
                <div className="text-gray-400 flex-shrink-0"><QrIcon /></div>
              </div>

              <div className={`flex items-center gap-3 p-3 border cursor-pointer transition-all rounded-none ${payMethod === "cod" ? "border-black bg-gray-50/70" : "border-gray-200 hover:bg-gray-50/50"}`} onClick={() => setPay("cod")}>
                <input type="radio" name="pay" readOnly checked={payMethod === "cod"} className="accent-black w-3.5 h-3.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-950">Thanh toán khi nhận hàng (COD)</p>
                </div>
                <div className="text-sm flex-shrink-0">💵</div>
              </div>
            </div>

            <button onClick={handleOrder} className="w-full py-3.5 bg-black hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all shadow-md">
              ĐẶT HÀNG NGAY →
            </button>
          </div>
        </main>
      )}

      {screen === "success" && (
        <main className="max-w-[1100px] w-full px-4 flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 w-full flex flex-col gap-5">
            {/* Box Thông báo thành công chính */}
            <div className="bg-white border border-gray-200 rounded-none p-6 shadow-sm">
              <div className="pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-black text-white flex items-center justify-center text-[8px]">✓</span>THANH TOÁN HOÀN TẤT
                </div>
                <h2 className="text-xl font-black text-black tracking-tight">Cảm ơn bạn đã đặt hàng!</h2>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Đơn hàng <span className="font-bold text-black">#{orderId}</span> của bạn đã được ghi nhận. Chúng tôi đang chuẩn bị những món đồ tinh tế nhất để gửi đến bạn.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-200 p-4 bg-white">
                  <div className="text-base mb-1">📋</div>
                  <p className="text-xs font-bold text-black">Đang xử lý</p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-normal">Kiểm tra chất lượng và đóng gói thủ công trong 24h tới.</p>
                </div>
                <div className="border border-gray-200 p-4 bg-white">
                  <div className="text-base mb-1">🚚</div>
                  <p className="text-xs font-bold text-black">Vận chuyển</p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-normal">Dự kiến giao hàng trong 2-3 ngày làm việc tới địa chỉ của bạn.</p>
                </div>
              </div>

              {/* KHỐI HƯỚNG DẪN GIỮ LIÊN LẠC (VỪA THÊM THEO ĐÚNG DESIGN) */}
              <div className="border border-gray-200 p-4 bg-white mb-5">
                <p className="text-xs font-bold text-black uppercase tracking-wider mb-3">Hướng dẫn giữ liên lạc</p>
                <ul className="space-y-2.5 text-[11px] text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <span className="text-xs flex-shrink-0">📞</span>
                    <span>Vui lòng để điện thoại ở chế độ có chuông. Shipper sẽ gọi cho bạn khi hàng đến.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-xs flex-shrink-0">💬</span>
                    <span>Theo dõi tin nhắn SMS. Chúng tôi sẽ gửi mã xác nhận lộ trình.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-xs flex-shrink-0">🏠</span>
                    <span>Nếu vắng nhà, hãy để lại lời nhắn hoặc ủy quyền cho người nhận hộ.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button className="flex-1 py-3 bg-black hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all">THEO DÕI ĐƠN HÀNG</button>
                <button 
                  onClick={() => { 
                    localStorage.removeItem("mando_cart"); 
                    navigate("/"); 
                  }} 
                  className="flex-1 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold uppercase tracking-widest rounded-none transition-all"
                >
                  TIẾP TỤC MUA SẮM
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[380px] flex flex-col gap-4">
            {/* Box tóm tắt tiền bên phải */}
            <div className="bg-white border border-gray-200 p-5 rounded-none shadow-sm">
              <RenderOrderDetails />
            </div>

            {/* KHỐI CẦN HỖ TRỢ? (VỪA THÊM THEO ĐÚNG DESIGN) */}
            <div className="bg-[#f8f9fa] border border-gray-200 p-5 rounded-none text-left">
              <p className="text-xs font-bold text-black uppercase tracking-wider mb-1">Cần hỗ trợ?</p>
              <p className="text-[11px] text-gray-400 mb-3">Mọi thắc mắc vui lòng liên hệ hotline.</p>
              <p className="text-sm font-black text-black tracking-wider">1900 1234 5678</p>
            </div>
          </div>
        </main>
      )}

      {showQR && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="bg-white w-[340px] p-5 rounded-none shadow-xl text-center relative border border-gray-100">
            <button onClick={() => setShowQR(false)} className="absolute top-2.5 right-3.5 text-gray-400 hover:text-black text-sm">✕</button>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-900 mb-0.5">Vui lòng quét mã QR để hoàn tất thanh toán</p>
            <div className="inline-block p-1.5 border border-gray-200 rounded-none bg-white mb-3.5 my-3">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=QuetMaThanhToan_SoTien_${totalAmount}_DonHang_${orderId}`} alt="VietQR Code" className="w-[130px] h-[130px] object-contain" />
            </div>
            <table className="w-full text-[11px] text-left mb-4 border-collapse">
              <tbody>
                {[
                  ["Ngân hàng", "Vietcombank"],
                  ["Chủ TK", "MANDO FASHION"],
                  ["Số tiền", `${totalAmount.toLocaleString()}đ`],
                  ["Mã hàng", `${orderId} - ${form.name}`],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <td className="py-1.5 text-gray-400 uppercase font-medium text-[9px] w-20">{label}</td>
                    <td className="py-1.5 font-bold text-gray-950">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-2">
              <button onClick={() => setShowQR(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-wider">HỦY</button>
              <button onClick={confirmPayment} className="flex-[2] py-2.5 bg-black hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all">XÁC NHẬN THANH TOÁN</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}