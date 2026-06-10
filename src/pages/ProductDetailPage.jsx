import BackIcon from "@/assets/icons/BackIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import SureIcon from "@/assets/icons/SureIcon";
import TruckIcon from "@/assets/icons/TruckIcon";
import SuccessNotification from "@/components/common/SuccessNotification";
import WarningNotification from "@/components/common/WarningNotification";
import { PRODUCTS } from "@/data/product";
import { useCart } from "@/hooks/useCart";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function formatMoney(value) {
    return value.toLocaleString("vi-VN") + "đ";
}

export default function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = useMemo(() => {
        const p = PRODUCTS.find((item) => String(item.id) === String(id));
        if (!p) return null;

        return {
            ...p,
            sku: p.sku || String(p.id).toUpperCase(),
            images: p.images || [p.image],
            oldPrice: p.originalPrice,
            colors: p.colors || [
                { name: "Đen", hex: "#111111" },
                { name: "Trắng", hex: "#ffffff" },
                { name: "Xám", hex: "#d1d5db" },
            ],
            sizes: p.sizes || [
                { name: "S" },
                { name: "M" },
                { name: "L" },
                { name: "XL" },
                { name: "XXL", disabled: true },
            ]
        };
    }, [id]);

    console.log(product);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(null);
    const [showSizeChart, setShowSizeChart] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (product?.images?.length) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveImage(product.images[0]);
        }
        setSelectedColor(null);
        setSelectedSize(null);
        setQuantity(1);
    }, [product]);

    useEffect(() => {
        if (!toast) return;

        const timer = setTimeout(() => {
            setToast(null);
        }, 2000);

        return () => clearTimeout(timer);
    }, [toast]);

    if (!product) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-2xl font-bold">Sản phẩm không tồn tại</h1>
            </div>
        );
    }

    const showSuccess = (message) => setToast({ type: "success", message });
    const showWarning = (message) => setToast({ type: "warning", message });

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            showWarning("Vui lòng chọn màu sắc và kích cỡ sản phẩm!");
            return;
        }

        if (quantity < 1) {
            showWarning("Số lượng phải lớn hơn 0!");
            return;
        }

        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: activeImage,
            color: selectedColor.name,
            size: selectedSize.name,
            quantity,
        });

        showSuccess("Thêm vào giỏ hàng thành công!");
    };

    const handleBuyNow = () => {
        navigate("/checkout");
    };

    return (
        <div className="mx-auto min-h-screen max-w-7xl px-6 py-10 xl:px-10">
            {toast?.type === "success" && (
                <div className="fixed right-6 top-23 z-50">
                    <SuccessNotification>{toast.message}</SuccessNotification>
                </div>
            )}

            {toast?.type === "warning" && (
                <div className="fixed right-6 top-23 z-50">
                    <WarningNotification>{toast.message}</WarningNotification>
                </div>
            )}

            <div className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-zinc-700">
                <span>Trang chủ</span>
                <span className="px-2">›</span>
                <span>Áo</span>
                <span className="px-2">›</span>
                <span className="text-black">{product.name}</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr]">
                <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
                    <div className="flex flex-row gap-4 lg:flex-col">
                        {product.images.map((img) => {
                            const isActive = activeImage === img;

                            return (
                                <button
                                    key={img}
                                    onClick={() => setActiveImage(img)}
                                    className={[
                                        "h-23 w-23 overflow-hidden rounded-lg border bg-white p-1 transition cursor-pointer",
                                        isActive
                                            ? "border-black shadow-sm"
                                            : "border-zinc-300 hover:border-zinc-500",
                                    ].join(" ")}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="h-full w-full object-cover rounded-md"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-[#f4f4f4] p-4"> */}
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src={activeImage}
                            alt={product.name}
                            className="block w-full"
                        />
                    </div>
                    {/* </div> */}
                </div>

                <div className="pt-2">
                    <div className="text-[13px] font-medium tracking-[0.12em] text-zinc-600">
                        SKU: {product.sku}
                    </div>

                    <h1 className="mt-3 text-[48px] font-black leading-[1.05] tracking-tight text-black">
                        {product.name}
                    </h1>

                    <div className="mt-6 flex items-end gap-4">
                        <div className="text-[28px] font-bold text-black">
                            {formatMoney(product.price)}
                        </div>
                        <div className="pb-1 text-[18px] text-zinc-400 line-through">
                            {formatMoney(product.oldPrice)}
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="mb-4 text-[13px] font-bold uppercase tracking-wide text-zinc-900">
                            Màu sắc
                            {selectedColor ? `: ${selectedColor.name}` : ""}
                        </div>

                        <div className="flex gap-3">
                            {product.colors.map((color) => {
                                const isActive = selectedColor?.name === color.name;

                                return (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={[
                                            "h-12 w-12 border-2 p-1 transition",
                                            isActive ? "border-black" : "border-zinc-300",
                                            "cursor-pointer",
                                        ].join(" ")}
                                        aria-label={color.name}
                                    >
                                        <span
                                            className="block h-full w-full border border-zinc-200"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between gap-4">
                        <div className="text-[13px] font-bold uppercase tracking-wide text-zinc-900">
                            Kích cỡ
                            {selectedSize ? `: ${selectedSize.name}` : ""}
                        </div>

                        <button
                            onClick={() => setShowSizeChart(true)}
                            className="text-[14px] font-medium text-black underline underline-offset-2 cursor-pointer"
                        >
                            Bảng quy đổi kích cỡ
                        </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                        {product.sizes.map((size) => {
                            const isActive = selectedSize?.name === size.name;
                            const disabled = size.disabled;

                            return (
                                <button
                                    key={size.name}
                                    disabled={disabled}
                                    onClick={() => {
                                        if (!disabled) setSelectedSize(size);
                                    }}
                                    className={[
                                        "h-12 min-w-12 border px-4 text-[14px] font-medium transition",
                                        isActive
                                            ? "border-black text-black"
                                            : "border-zinc-300 text-zinc-900",
                                        disabled
                                            ? "cursor-not-allowed bg-zinc-50 text-zinc-300"
                                            : "cursor-pointer bg-white",
                                    ].join(" ")}
                                >
                                    {size.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-10">
                        <div className="mb-4 text-[13px] font-bold uppercase tracking-wide text-zinc-900">
                            Số lượng
                        </div>

                        <div className="flex h-12 w-40 items-center border border-zinc-300">
                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(0, prev - 1))
                                }
                                className="h-full w-1/3 text-[18px] text-zinc-700 cursor-pointer"
                            >
                                -
                            </button>
                            <div className="flex h-full w-1/3 items-center justify-center text-[16px]">
                                {quantity}
                            </div>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="h-full w-1/3 text-[18px] text-zinc-700 cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 space-y-3">
                        <button
                            onClick={handleAddToCart}
                            className="h-14 w-full border border-black bg-white text-[14px] font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white cursor-pointer"
                        >
                            Thêm vào giỏ hàng
                        </button>

                        <button
                            onClick={handleBuyNow}
                            className="h-14 w-full bg-black text-[14px] font-bold uppercase tracking-wide text-white transition hover:opacity-90 cursor-pointer"
                        >
                            Mua ngay
                        </button>
                    </div>

                    <div className="mt-10 border-t border-zinc-300 pt-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-[14px] text-zinc-900">
                            <div className="flex items-center gap-3">
                                <TruckIcon />
                                <span>GIAO HÀNG 2-4 NGÀY</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BackIcon />
                                <span>ĐỔI TRẢ 7 NGÀY</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <SureIcon />
                                <span>BẢO HÀNH 12 THÁNG</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckIcon />
                                <span>KIỂM TRA KHI NHẬN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSizeChart && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
                    onClick={() => setShowSizeChart(false)}
                >
                    <div
                        className="w-full max-w-150 overflow-hidden bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                            <h2 className="text-[24px] font-black tracking-wide text-black">
                                BẢNG QUY ĐỔI KÍCH CỠ
                            </h2>

                            <button
                                onClick={() => setShowSizeChart(false)}
                                className="text-zinc-600 hover:text-black"
                            >
                                {/* <X className="h-8 w-8" /> */}
                            </button>
                        </div>

                        <div className="p-5">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="bg-zinc-100 text-[14px] uppercase tracking-wide text-zinc-900">
                                        <th className="border-b-2 border-black px-3 py-4">
                                            Size
                                        </th>
                                        <th className="border-b-2 border-black px-3 py-4">
                                            Chiều cao (cm)
                                        </th>
                                        <th className="border-b-2 border-black px-3 py-4">
                                            Cân nặng (kg)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["S", "150 - 160", "45 - 55"],
                                        ["M", "160 - 170", "55 - 65"],
                                        ["L", "170 - 180", "65 - 75"],
                                        ["XL", "180 - 185", "75 - 85"],
                                        ["XXL", "185 - 190", "85 - 95"],
                                    ].map((row) => (
                                        <tr
                                            key={row[0]}
                                            className="border-b border-zinc-200 text-[18px]"
                                        >
                                            <td className="px-3 py-5 font-bold">
                                                {row[0]}
                                            </td>
                                            <td className="px-3 py-5 text-zinc-700">
                                                {row[1]}
                                            </td>
                                            <td className="px-3 py-5 text-zinc-700">
                                                {row[2]}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="border-t border-zinc-200 bg-zinc-100 px-5 py-4 text-center text-[14px] leading-6 text-zinc-700">
                            {/* <CalendarDays className="mr-2 inline-block h-4 w-4" /> */}
                            Lưu ý: Thông số mang tính chất tham khảo, có thể chênh lệch
                            1-2cm so với thực tế.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
