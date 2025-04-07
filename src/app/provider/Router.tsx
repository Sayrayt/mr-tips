import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

// import ProtectedRoute from "@/pages/Auth/ProtectedRoute";
// import ProcessingPage from "./ProcessingPage";
// import ErrorFallback from "./ErrorFallback";
const Loading = lazy(() => import("@pages/loading").then(module => ({ default: module.Loading })));

const Menu = lazy(() => import("@pages/menu").then(module => ({ default: module.Menu })));
const PaymentPage = lazy(() => import("@pages/paymentPage").then(module => ({ default: module.PaymentPage })));
const Profile = lazy(() => import("@pages/profile").then(module => ({ default: module.Profile })));
const ProfileOrders = lazy(() => import("@pages/profileOrders").then(module => ({ default: module.ProfileOrders })));

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
                        <Profile />
                    </Suspense>
                }
                errorElement={<h1>Ошибка</h1>}
            >
                {/* Вложенные маршруты внутри профиля */}
                <Route
                    path="orders"
                    element={
                        <Suspense fallback={<Loading />}>
                            <ProfileOrders />
                        </Suspense>
                    }
                />
            </Route>

        </>


    )
);

export default Router;
