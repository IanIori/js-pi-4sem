import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Relatorio from '../pages/relatorios'
import NotFound from '../pages/404'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/about', element: <Relatorio />},
])

export default router