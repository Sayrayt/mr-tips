import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

const Layout = lazy(() => import("@pages/layout/Layout"));
const Loading = lazy(() => import("@pages/loading/Loading"));
const Profile = lazy(() => import("@pages/profile/Profile"));
const QRCode = lazy(() => import("@pages/QRCode/QRCode"));
const Orders = lazy(() => import('@pages/orders/Orders'));
const Institution = lazy(() => import('@pages/institution/Institution'));
const Balance = lazy(() => import('@pages/balance/Balance'));
const Transactions = lazy(() => import('@pages/transactions/Transactions'));
const Tips = lazy(() => import('@pages/tips/Tips'));
const Login = lazy(() => import('@pages/login/Login'));
const Registration = lazy(() => import('@pages/registration/Registration'));

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                index
                path="/"
                element={
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                }
                errorElement={<h1>Ошибка</h1>}
            />

            <Route

                path="/registration"
                element={
                    <Suspense fallback={<Loading />}>
                        <Registration />
                    </Suspense>
                }
                errorElement={<h1>Ошибка</h1>}
            />


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
                    path="institution"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Institution />
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
                    path="balance"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Balance />
                        </Suspense>
                    }
                />

                <Route
                    path="transactions"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Transactions />
                        </Suspense>
                    }
                />

                <Route
                    path="tips"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Tips />
                        </Suspense>
                    }
                />


            </Route>

        </>


    )
);

export default Router;
