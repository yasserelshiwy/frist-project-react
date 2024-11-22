import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./assets/pages/About/About";
import Home from "./assets/pages/Home/Home";
import Layout from "./assets/pages/Layout/Layout";
import NotFound from "./assets/pages/Home/Notfound/NotFound";

import Contact from "./assets/pages/Contact/Contact";
import Portfolio from "./assets/pages/Portfolio/Portfolio";

export default function App() {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  );
}
