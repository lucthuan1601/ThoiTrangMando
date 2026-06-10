// src/data/product.js
import AoImg from "@/assets/images/Ao.png";
import QuanImg from "@/assets/images/Quanden.png";
import BlazerImg from "@/assets/images/Blazer.png";
import AolenImg from "@/assets/images/aolen.png";
import QuanauImg from "@/assets/images/quanau.png";
import AodenImg from "@/assets/images/aoden.png";

// Áo sơ mi
import AosomiImg from "@/assets/images/aosomi.png";
import AosomidenImg from "@/assets/images/aosomiden.png";
import Aosomikexanh from "@/assets/images/aosomikexanh.png";
import Aosominavy from "@/assets/images/aosominavy.png";
import Aosomicoc from "@/assets/images/aosomicoc.png";
import Aosomichim from "@/assets/images/aosomichim.png";

// Phụ kiện (Sửa đồng bộ tên biến import)
import ViImg from "@/assets/images/vi.png";
import DongHoImg from "@/assets/images/dongho.png";
import KinhImg from "@/assets/images/kinhthoitrang.png";
import ThatLungImg from "@/assets/images/thatlungda.png";
import VongTayImg from "@/assets/images/vongtay.png";
import CaVatImg from "@/assets/images/cavat.png";

import SuuTap1 from "@/assets/images/suutap1.png";
import SuuTap2 from "@/assets/images/suutap2.png";
import SuuTap3 from "@/assets/images/suutap3.png";
import SuuTap4 from "@/assets/images/suutap4.png";
import SuuTap5 from "@/assets/images/suutap5.png";
import SuuTap6 from "@/assets/images/suutap6.png";

export const HERO_BANNER = {
    title: "The Editorial Collection.",
    description: "Defining modern minimalism through architectural silhouettes and premium Vietnamese craftsmanship.",
    buttonText: "MUA NGAY",
    image: AoImg,
};

export const CATEGORIES = [
    {
        id: "ao",
        label: "Áo",
        cta: "KHÁM PHÁ",
        to: "/ao",
        image: AoImg,
        size: "large",
    },
    {
        id: "quan",
        label: "Quần",
        cta: "KHÁM PHÁ",
        to: "/quan",
        image: QuanImg,
        size: "small",
    },
    {
        id: "phu-kien",
        label: "Phụ kiện",
        cta: "XEM TẤT CẢ",
        to: "/phu-kien",
        images: [ViImg, DongHoImg],
        size: "banner",
    },
];

export const NEW_ARRIVALS = [
    {
        id: "blazer-beige-01",
        name: "Blazer Nam Cao Cấp",
        price: 1250000,
        originalPrice: null,
        image: BlazerImg,
        badge: "new",
        category: "ao",
    },
    {
        id: "sweater-ivory-01",
        name: "Áo Len Cổ Tròn",
        price: 850000,
        originalPrice: null,
        image: AolenImg,
        badge: null,
        category: "ao",
    },
    {
        id: "quan-slim-black-01",
        name: "Quần Âu Slim Fit",
        price: 765000,
        originalPrice: 900000,
        image: QuanauImg,
        badge: "-15%",
        category: "quan",
    },
    {
        id: "mandarin-shirt-01",
        name: "Áo Thun Đen Basic",
        price: 620000,
        originalPrice: null,
        image: AodenImg,
        badge: null,
        category: "ao",
    },
];

export const SHIRTS = [
    {
        id: "ao-so-mi-oxford-premium-trang",
        name: "Áo Sơ Mi Oxford Premium Trắng",
        price: 350000,
        originalPrice: 450000,
        image: AosomiImg,
        tag: "PREMIUM",
        isPremiumBadge: true,
        category: "ao"
    },
    {
        id: "ao-so-mi-den-slim-fit",
        name: "Áo Sơ Mi Đen Slim-fit",
        price: 285000,
        originalPrice: null,
        image: AosomidenImg,
        tag: "MANDO BASIC",
        category: "ao"
    },
    {
        id: "ao-so-mi-ke-soc-xanh",
        name: "Áo Sơ Mi Kẻ Sọc Xanh",
        price: 320000,
        originalPrice: null,
        image: Aosomikexanh,
        tag: "COLLECTION '24",
        category: "ao"
    },
    {
        id: "ao-so-mi-hoa-tiet-chim-navy",
        name: "Áo Sơ Mi Họa Tiết Chìm Navy",
        price: 380000,
        originalPrice: null,
        image: Aosominavy,
        tag: "OFFICE WEAR",
        category: "ao"
    },
    {
        id: "ao-so-mi-coc-tay-ghi-sang",
        name: "Áo Sơ Mi Cộc Tay Ghi Sáng",
        price: 260000,
        originalPrice: null,
        image: Aosomicoc,
        tag: "SUMMER VIBE",
        category: "ao"
    },
    {
        id: "ao-so-mi-dui-mau-be",
        name: "Áo Sơ Mi Đũi Màu Be",
        price: 295000,
        originalPrice: null,
        image: Aosomichim,
        tag: "ETHNIC SERIES",
        category: "ao"
    }
];

export const PANTS = [
    {
        id: "quan-au-slim-fit-premium",
        name: "Quần Âu Slim Fit Premium Black",
        price: 765000,
        originalPrice: 900000,
        image: QuanauImg,
        tag: "PREMIUM",
        isPremiumBadge: true,
        category: "quan"
    },
    {
        id: "quan-tay-nam-basic-01",
        name: "Quần Tây Nam Mando Basic",
        price: 285000,
        originalPrice: null,
        image: QuanImg,
        tag: "MANDO BASIC",
        category: "quan"
    },
    {
        id: "quan-au-han-quoc-24",
        name: "Quần Âu Dáng Suông Collection '24",
        price: 320000,
        originalPrice: null,
        image: QuanauImg,
        tag: "COLLECTION '24",
        category: "quan"
    },
    {
        id: "quan-tay-cong-so-luxury",
        name: "Quần Tây Công Sở Office Wear",
        price: 380000,
        originalPrice: null,
        image: QuanImg,
        tag: "OFFICE WEAR",
        category: "quan"
    },
    {
        id: "quan-short-dui-summer",
        name: "Quần Đũi Ghi Sáng Summer Vibe",
        price: 260000,
        originalPrice: null,
        image: QuanauImg,
        tag: "SUMMER Vibe",
        category: "quan"
    },
    {
        id: "quan-tuyet-mua-be",
        name: "Quần Tây Tuyết Mưa Màu Be",
        price: 295000,
        originalPrice: null,
        image: QuanImg,
        tag: "ETHNIC SERIES",
        category: "quan"
    }
];

export const ACCESSORIES = [
    {
        id: "dong-ho-minimal-premium",
        name: "Đồng Hồ Minimal Premium Silver",
        price: 1250000,
        originalPrice: 1550000,
        image: DongHoImg,
        tag: "PREMIUM",
        isPremiumBadge: true,
        category: "phu-kien"
    },
    {
        id: "vi-da-nam-basic-black",
        name: "Ví Da Nam Mando Basic Black",
        price: 420000,
        originalPrice: null,
        image: ViImg,
        tag: "MANDO BASIC",
        category: "phu-kien"
    },
    {
        id: "kinh-mat-tron-classic",
        name: "Kính Mát Thời Trang Gọng Tròn Classic",
        price: 350000,
        originalPrice: null,
        image: KinhImg,
        tag: "COLLECTION '24",
        category: "phu-kien"
    },
    {
        id: "that-lung-da-khoa-kim",
        name: "Thắt Lưng Da Cao Cấp Khóa Kim",
        price: 450000,
        originalPrice: null,
        image: ThatLungImg,
        tag: "OFFICE WEAR",
        category: "phu-kien"
    },
    {
        id: "vong-tay-da-cam-thach",
        name: "Vòng Tay Chuỗi Đá Phối Charm Bạc",
        price: 195000,
        originalPrice: null,
        image: VongTayImg,
        tag: "SUMMER VIBE",
        category: "phu-kien"
    },
    {
        id: "ca-vat-lua-ke-soc",
        name: "Cà Vạt Lụa Bản Nhỏ Kẻ Sọc Xanh",
        price: 250000,
        originalPrice: null,
        image: CaVatImg,
        tag: "ETHNIC SERIES",
        category: "phu-kien"
    }
];
export const NEW_COLLECTION = [
    {
        id: "the-editorial-blazer-01",
        name: "Architectural Tailored Blazer",
        price: 1450000,
        originalPrice: 1850000,
        image: SuuTap1, // suutap1.png
        tag: "EDITORIAL COLL.",
        isPremiumBadge: true,
        category: "ao"
    },
    {
        id: "minimalist-oversized-shirt",
        name: "Minimalist Oversized Shirt Ivory",
        price: 520000,
        originalPrice: null,
        image: SuuTap2, // suutap2.png
        tag: "MODERN MINIMALISM",
        category: "ao"
    },
    {
        id: "relaxed-fit-trouser-gray",
        name: "Relaxed Fit Tailored Trouser",
        price: 780000,
        originalPrice: null,
        image: SuuTap3, // suutap3.png
        tag: "EDITORIAL COLL.",
        category: "quan"
    },
    {
        id: "structured-wool-coat-premium",
        name: "Structured Wool Blend Coat",
        price: 2450000,
        originalPrice: null,
        image: SuuTap4, // suutap4.png
        tag: "PREMIUM LINE",
        isPremiumBadge: true,
        category: "ao"
    },
    {
        id: "contemporary-layering-knit",
        name: "Contemporary Layering Knitwear",
        price: 690000,
        originalPrice: 850000,
        image: SuuTap5, // suutap5.png
        tag: "CRAFTSMANSHIP",
        category: "ao"
    },
    {
        id: "monochrome-casual-suit-set",
        name: "Monochrome Tailored Suit Set",
        price: 1950000,
        originalPrice: null,
        image: SuuTap6, // suutap6.jpg
        tag: "EDITORIAL COLL.",
        category: "ao"
    }
];

// Mảng PRODUCTS tổng hợp đầy đủ tất cả danh mục của dự án
export const PRODUCTS = [
    ...NEW_ARRIVALS,
    ...SHIRTS,
    ...PANTS,
    ...ACCESSORIES,
    ...NEW_COLLECTION
];