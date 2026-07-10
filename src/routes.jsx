import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import "./index.css";
import Home from "./pages/homePage";
import Recipe from "./pages/recipePage";
import Error404 from "./pages/error404";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe", element: <Recipe /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
