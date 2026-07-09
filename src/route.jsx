import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/homePage';
import FindRecipe from './pages/findRecipePage';
import Recipe from './pages/recipePage';
import './index.css';
import Error404 from './pages/error404';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/recipes', element: <FindRecipe /> },
      { path: '/recipes/:id', element: <Recipe /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },

  {
    path: '*',
    element: <Error404 />,
  }
]);

export default router;