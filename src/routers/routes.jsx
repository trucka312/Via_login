import { useRoutes } from 'react-router-dom'

import Home from '../pages/Home/home.jsx'

const useRoutesElements = () => {
  const elementRoutes = useRoutes([
    {
      path: '/homepage',
      element: <Home />
    },
  ])
  return elementRoutes
}

export default useRoutesElements