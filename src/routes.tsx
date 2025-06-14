import { createBrowserRouter, Route } from "react-router-dom";
import { Home } from "./app/pages/Home";
import { createRoutesFromElements, RouterProvider } from "react-router";
import { NotFound } from "./app/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
