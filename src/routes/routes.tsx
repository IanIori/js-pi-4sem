import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/404'
import About from '../pages/about'
import LoginScreen from '../pages/login'
import Main from '../pages/main'
import Cargas from '../pages/carga'
import Cadastro from '../pages/cadastro'
import Relatorio from '../pages/relatorios'
import Calendario from '../pages/calendario'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/about', element: <About />},
  {path: '/login', element: <LoginScreen />},
  {path: '/main', element: <Main />},
  {path: '/carga', element: <Cargas />},
  {path: '/cadastro', element: <Cadastro />},
  {path: '/relatorios', element: <Relatorio />},
  {path: '/calendario', element: <Calendario />},
  {path: '/main', element: <Main />}
])

export default router