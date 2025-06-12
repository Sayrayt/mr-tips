import { lazy } from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

const Menu = lazy(() => import('@pages/menu/Menu'));
const PaymentPage = lazy(() => import("@pages/paymentPage/PaymentPage"));

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route errorElement={<h1>Ошибка</h1>} index path="/menu" element={<Menu />} />
            <Route errorElement={<h1>Ошибка</h1>} path="payment" element={<PaymentPage />} />
        </>
    )
);

export default Router;
