import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404'
import About from '../pages/about'
import Contact from '../pages/contact'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/about', element: <About />},
  {path: '/contact', element: <Contact />},
])

export default router