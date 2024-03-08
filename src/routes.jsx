import { useRoutes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';



  
export default function Router() {
 
return useRoutes([
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ]);
}