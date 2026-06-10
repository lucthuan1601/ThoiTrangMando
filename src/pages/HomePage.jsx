import { Link } from "react-router-dom";
import { CATEGORIES, NEW_ARRIVALS } from "@/data/product";
import BackgroundDoTayImg from "@/assets/images/BackgroundDotay.png";

function HomePage() {
    return (
        <div className="bg-[#f5f5f5]">
            {/* HERO */}
            <section className="relative h-[620px] overflow-hidden">
                <img
                    src={BackgroundDoTayImg}
                    alt="Banner"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute left-10 top-1/2 max-w-xl -translate-y-1/2">
                    <h1 className="text-6xl font-bold text-black">
                        The Editorial Collection.
                    </h1>

                    <p className="mt-6 text-lg text-black">
                        Defining modern minimalism through architectural
                        silhouettes and premium Vietnamese craftsmanship.
                    </p>

                    <button className="mt-8 bg-black px-10 py-4 text-sm font-semibold text-white">
                        MUA NGAY
                    </button>
                </div>
            </section>

            {/* CATEGORY */}
            <section className="px-6 py-8">
                <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                    {/* Áo */}
                    <div className="relative overflow-hidden bg-white">
                        <img
                            src={CATEGORIES[0].image}
                            alt=""
                            className="h-[380px] w-full object-cover"
                        />

                        <div className="absolute bottom-6 left-6">
                            <h2 className="text-5xl font-bold">
                                {CATEGORIES[0].label}
                            </h2>

                            <Link to={CATEGORIES[0].to} className="mt-2 border-b border-black text-sm font-semibold inline-block">
                                KHÁM PHÁ
                            </Link>
                        </div>
                    </div>

                    {/* Quần */}
                    <div className="relative overflow-hidden bg-white">
                        <img
                            src={CATEGORIES[1].image}
                            alt=""
                            className="h-[380px] w-full object-cover"
                        />

                        <div className="absolute bottom-6 left-6">
                            <h2 className="text-5xl font-bold">
                                {CATEGORIES[1].label}
                            </h2>

                            <Link to={CATEGORIES[1].to} className="mt-2 border-b border-black text-sm font-semibold inline-block">
                                KHÁM PHÁ
                            </Link>
                        </div>
                    </div>
                </div>

                {/* phụ kiện */}
                <div className="mt-4 flex items-center justify-between bg-[#efefef] px-10 py-12">
                    <div>
                        <h2 className="text-5xl font-bold">Phụ kiện</h2>

                        <Link to={CATEGORIES[2].to} className="mt-2 border-b border-black text-sm font-semibold inline-block">
                            XEM TẤT CẢ
                        </Link>
                    </div>

                    <div className="flex gap-6">
                        {CATEGORIES[2].images.map((img) => (
                            <img
                                key={img}
                                src={img}
                                alt=""
                                className="h-32 w-32 object-cover"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW ARRIVAL */}
            <section className="px-6 py-10">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-500">
                            Latest Drop
                        </p>

                        <h2 className="text-5xl font-bold">
                            Hàng Mới Về
                        </h2>
                    </div>

                    <button className="text-sm font-medium">
                        Tất cả sản phẩm
                    </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {NEW_ARRIVALS.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="block group">
                            <div className="relative overflow-hidden bg-white">
                                {product.badge && (
                                    <span className="absolute left-3 top-3 bg-pink-600 px-2 py-1 text-xs font-bold text-white">
                                        NEW
                                    </span>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[420px] w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                                    {product.name}
                                </h3>

                                <div className="mt-2 flex items-center gap-3">
                                    <span
                                        className={`font-medium ${
                                            product.originalPrice
                                                ? "text-red-500"
                                                : ""
                                        }`}
                                    >
                                        {product.price.toLocaleString("vi-VN")}đ
                                    </span>

                                    {product.originalPrice && (
                                        <span className="text-gray-400 line-through">
                                            {product.originalPrice.toLocaleString(
                                                "vi-VN"
                                            )}
                                            đ
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="px-6 py-12">
                <div className="border-2 border-black bg-[#f5f5f5] px-10 py-16">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-5xl font-bold">
                                Join the Mando Society
                            </h2>

                            <p className="mt-5 max-w-xl text-lg text-zinc-600">
                                Receive exclusive access to new collections and
                                editorial lookbooks. No spam, only inspiration.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <div className="w-full border-b-2 border-black pb-2">
                                <div className="flex items-center justify-between">
                                    <input
                                        type="email"
                                        placeholder="Email của bạn"
                                        className="w-full bg-transparent outline-none"
                                    />

                                    <button className="font-bold uppercase">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;