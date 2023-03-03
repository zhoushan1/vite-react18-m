import Home from './pages/home'
import About from './pages/about'

const routes = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/home',
    element: <Home />,
    index: true,
  },
  {
    path: '/about',
    element: <About />,
  },
]

export default routes
