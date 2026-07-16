import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import "./index.css";
import Home from "./pages/homePage";
import Recipe from "./pages/recipePage";
import FindRecipe from "./pages/findRecipe";
import Error404 from "./pages/error404";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import AiChat from "./pages/aiChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe", element: <Recipe /> },
      { path: "/findRecipe", element: <FindRecipe /> },
      { path: "/about", element: <About /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/ai-chat", element: <AiChat /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
