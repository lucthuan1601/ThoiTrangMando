import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function Home() {
  return <div className="min-h-[60vh] p-6">Trang chủ</div>;
}

function Ao() {
  return <div className="min-h-[60vh] p-6">Trang Áo</div>;
}

function Quan() {
  return <div className="min-h-[60vh] p-6">Trang Quần</div>;
}

function PhuKien() {
  return <div className="min-h-[60vh] p-6">Trang Phụ kiện</div>;
}

function BoSuuTapMoi() {
  return <div className="min-h-[60vh] p-6">Trang Bộ sưu tập mới</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ao" element={<Ao />} />
        <Route path="/quan" element={<Quan />} />
        <Route path="/phu-kien" element={<PhuKien />} />
        <Route path="/bo-suu-tap-moi" element={<BoSuuTapMoi />} />
      </Route>
    </Routes>
  );
}