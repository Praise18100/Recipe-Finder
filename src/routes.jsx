import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/homePage';
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