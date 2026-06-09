import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
