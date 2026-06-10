//import { NavLink } from "react-router-dom";
import CartIcon from "@/assets/icons/CartIcon";
import UserIcon from "@/assets/icons/UserIcon";
import BellIcon from "@/assets/icons/BellIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { useCart } from "@/hooks/useCart";

const navItems = [
    { to: "/", label: "Trang chủ" },
    { to: "/shirt", label: "Áo" },
    { to: "/pants", label: "Quần" },
    { to: "/accessories", label: "Phụ kiện" },
    { to: "/new-collection", label: "Bộ sưu tập mới" },
];

export default function Header() {
    const { cartCount } = useCart();

    const linkClass = ({ isActive }) =>
        [
            "relative text-[14px] font-medium transition-all duration-200",
            isActive
                ? "-translate-y-1 text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-black"
                : "text-zinc-600 hover:text-black",
        ].join(" ");

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={linkClass}>
            Trang chủ
          </NavLink>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

                <nav className="hidden items-center gap-8 lg:flex">
                    {/* <NavLink to="/" className={linkClass}>
                        Trang chủ
                    </NavLink> */}
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={linkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

          {/* 3. Cập nhật NavLink bao quanh CartIcon */}
          <NavLink to="/cart" className={linkClass}>
            <div className="relative inline-block">
              <CartIcon />

                    <button className="relative">
                        <CartIcon />
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button>
                        <UserIcon />
                    </button>
                    <button>
                        <BellIcon />
                    </button>
                </div>
            </div>
          </NavLink>
          <button>
            <UserIcon />
          </button>
          <button>
            <BellIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
