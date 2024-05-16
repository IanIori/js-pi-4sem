import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404'
import About from '../pages/about'
import LoginScreen from '../pages/login'
import Main from '../pages/main'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/about', element: <About />},
  {path: '/login', element: <LoginScreen />},
  {path: '/main', element: <Main />}
])

export default router