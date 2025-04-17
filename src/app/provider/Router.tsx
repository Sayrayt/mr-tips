import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

// import ProtectedRoute from "@/pages/Auth/ProtectedRoute";
// import ProcessingPage from "./ProcessingPage";
// import ErrorFallback from "./ErrorFallback";
const Loading = lazy(() => import("@pages/loading").then(module => ({ default: module.Loading })));

const Menu = lazy(() => import("@pages/menu").then(module => ({ default: module.Menu })));
const PaymentPage = lazy(() => import("@pages/paymentPage").then(module => ({ default: module.PaymentPage })));
const ProfileLayout = lazy(() => import("@pages/profilePage/profileLayout").then(module => ({ default: module.ProfileLayout })));
const Profile = lazy(() => import("@pages/profilePage/profile").then(module => ({ default: module.Profile })));
const QRCode = lazy(() => import("@pages/profilePage/QRCode").then(module => ({ default: module.QRCode })));
const Orders = lazy(() => import('@pages/profilePage/orders').then(module => ({ default: module.Orders })));

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/menu"
                element={
                    <Suspense fallback={<Loading />}>
                        <Menu />
                    </Suspense>
                }
                errorElement={
                    <h1>Ошибка</h1>
                }
            />

            <Route
                path="/menu/payment"
                element={
                    <Suspense fallback={<Loading />}>
                        <PaymentPage />
                    </Suspense>
                }
                errorElement={
                    <h1>Ошибка</h1>
                }
            />

            <Route
                path="/profile"
                element={
                    <Suspense fallback={<Loading />}>
                        <ProfileLayout />
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
            </Route>

        </>


    )
);

export default Router;
