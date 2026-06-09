import BankIcon from "@/assets/icons/BankIcon";
import CreditCardIcon from "@/assets/icons/CreditCardIcon";

const footerColumns = [
  {
    title: "SẢN PHẨM",
    links: ["Áo", "Quần", "Phụ kiện"],
  },
  {
    title: "VG MANDO",
    links: ["Về chúng tôi", "Lookbook", "Cửa hàng"],
  },
  {
    title: "HỖ TRỢ",
    links: ["Chính sách bảo mật", "Điều khoản dịch vụ", "Liên hệ"],
  },
  {
    title: "FOLLOW",
    links: ["Instagram", "Facebook"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] text-zinc-700">
      <div className="mx-auto px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="text-[34px] font-black leading-none tracking-tight text-black">
              Mando
            </div>
            <p className="mt-4 max-w-72.5 text-[15px] leading-6 text-zinc-600">
              Minimalist fashion for the modern Vietnamese wardrobe. Authority in style, clarity in design.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[14px] font-bold tracking-wide text-black">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-zinc-600 hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-zinc-300 pt-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[14px] text-zinc-500">
              © 2024 Mando. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-zinc-700">
              <CreditCardIcon />
              <BankIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}