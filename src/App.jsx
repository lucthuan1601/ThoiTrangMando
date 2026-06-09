import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { publicRoutes } from "@/routes";

export default function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = MainLayout;
                console.log(route);

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}
