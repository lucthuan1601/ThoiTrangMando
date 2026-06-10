import product1 from "@/assets/images/product-1.jpg";
import product2 from "@/assets/images/product-2.jpg";
import product3 from "@/assets/images/product-3.jpg";
import product4 from "@/assets/images/product-4.jpg";

const products = [
    {
        id: 1,
        sku: "MS-OXF01",
        name: "Áo Sơ Mi Oxford Premium Trắng",
        price: 350000,
        oldPrice: 450000,
        colors: [
            { name: "Trắng", hex: "#ffffff" },
            { name: "Xanh", hex: "#dbe9f7" },
            { name: "Xám", hex: "#d1d5db" },
        ],
        sizes: [
            { name: "S" },
            { name: "M" },
            { name: "L" },
            { name: "XL" },
            { name: "XXL", disabled: true },
        ],
        images: [product1, product2, product3, product4],
    },

    {
        id: 2,
        sku: "AO-002",
        name: "Áo Thun Basic Đen",
        price: 220000,
        oldPrice: 280000,
        colors: [
            { name: "Đen", hex: "#111111" },
            { name: "Trắng", hex: "#ffffff" },
        ],
        sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
        images: [
            "/images/tshirt-1.jpg",
            "/images/tshirt-2.jpg",
            "/images/tshirt-3.jpg",
            "/images/tshirt-4.jpg",
        ],
    },
];

export { products };
