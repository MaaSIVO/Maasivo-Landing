import * as React from 'react'
import { Home } from '@pages/Home'
import ReactDOM from 'react-dom/client'
import { MaaSIVO } from '@pages/MaaSIVO'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import '@styles/index.scss'
import '../node_modules/maasivo-ui/dist/style.css'
import { RootLayout } from './components'
import { MaaS, Travit } from './pages'

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'team',
        element: <MaaSIVO />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'travit',
        element: <Travit />,
      },
      {
        path: 'maas',
        element: <MaaS />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
