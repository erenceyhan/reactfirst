import { useRoutes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Experience from './pages/experience/Experience';
import Home from './pages/home/Home';
import Project from './pages/project/Project';

  
export default function Router() {
 
return useRoutes([
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/education', element: <Education /> },
    { path: '/experience', element: <Experience /> },
    { path: '/home', element: <Home /> },
    { path: '/project', element: <Project /> },
  ]);
}