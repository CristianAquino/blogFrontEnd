import { lazy, Suspense } from "react";
import "../index.css";
import { createBrowserRouter } from "react-router-dom";

const Layaout = lazy(() => import("../App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>Cargando...</>}>
        <Layaout />
      </Suspense>
    ),
    errorElement: <h1>ESTO ES UN ERROR</h1>,
  },
]);

export default router;
