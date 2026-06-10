import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, UserRound, Bell } from "lucide-react";
import { useCart } from "../context/CartContext";

const navItems = [
    { to: "/", label: "Trang chủ", end: true },
    { to: "/ao", label: "Áo" },
    { to: "/quan", label: "Quần" },
    { to: "/phu-kien", label: "Phụ kiện" },
    { to: "/bo-suu-tap-moi", label: "Bộ sưu tập mới" },
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

    return (
        <header className="w-full border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-[86px] w-full items-center justify-between px-6 lg:px-8">
                <NavLink
                    to="/"
                    className="text-[58px] font-black leading-none tracking-tight text-black"
                >
                    Mando
                </NavLink>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={linkClass}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="hidden h-[44px] w-[220px] items-center border border-zinc-300 bg-zinc-100/80 pl-3 pr-4 lg:flex">
                        <Search className="mr-3 h-5 w-5 text-zinc-600" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
                        />
                    </div>

                    <button className="lg:hidden">
                        <Search className="h-6 w-6 text-zinc-800" />
                    </button>

                    <button className="relative">
                        <ShoppingCart className="h-6 w-6 text-zinc-800" />
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button>
                        <UserRound className="h-6 w-6 text-zinc-800" />
                    </button>
                    <button>
                        <Bell className="h-6 w-6 text-zinc-800" />
                    </button>
                </div>
            </div>
        </header>
    );
}
