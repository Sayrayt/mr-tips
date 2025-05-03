import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

const Layout = lazy(() => import("@pages/layout/Layout"));
const Loading = lazy(() => import("@pages/loading/Loading"));
const Profile = lazy(() => import("@pages/profile/Profile"));
const QRCode = lazy(() => import("@pages/QRCode/QRCode"));
const Orders = lazy(() => import('@pages/orders/Orders'));
const Institution = lazy(() => import('@pages/institution/Institution'));

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/profile"
                element={
                    <Suspense fallback={<Loading />}>
                        <Layout />
                    </Suspense>
                }
                errorElement={<h1>Ошибка</h1>}
            >
                {/* Вложенные маршруты внутри профиля */}
                <Route
                    index
                    element={
                        <Suspense fallback={<Loading />}>
                            <Profile />
                        </Suspense>
                    }
                />

                <Route
                    path="orders"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Orders />
                        </Suspense>
                    }
                />

                <Route
                    path="qr-code"
                    element={
                        <Suspense fallback={<Loading />}>
                            <QRCode />
                        </Suspense>
                    }
                />

                <Route
                    path="institution"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Institution />
                        </Suspense>
                    }
                />
            </Route>

        </>


    )
);

export default Router;
