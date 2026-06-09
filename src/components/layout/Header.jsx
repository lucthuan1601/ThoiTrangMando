import { NavLink } from "react-router-dom";
import CartIcon from "@/assets/icons/CartIcon";
import UserIcon from "@/assets/icons/UserIcon";
import BellIcon from "@/assets/icons/BellIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { publicRoutes } from "@/routes";

const navItems = publicRoutes
    .filter((route) => route.path !== "/")
    .map((route) => ({
        to: route.path,
        label: route.label,
    }));

export default function Header() {
    const linkClass = ({ isActive }) =>
        [
            "relative text-[14px] font-medium transition-all duration-200",
            isActive
                ? "-translate-y-1 text-black after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-black"
                : "text-zinc-600 hover:text-black",
        ].join(" ");

    return (
        <header className="w-full border-b border-zinc-200 bg-white">
            <div className="mx-auto flex h-21.5 w-full items-center justify-between px-6 lg:px-8">
                <div className="shrink-0">
                    <NavLink
                        to="/"
                        className="text-[58px] font-black leading-none tracking-tight text-black"
                    >
                        Mando
                    </NavLink>
                </div>

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

                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="hidden h-11 w-55 items-center border border-zinc-300 bg-zinc-100/80 pl-3 pr-4 lg:flex">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
                        />
                    </div>

                    <button>
                        <CartIcon />
                    </button>
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
