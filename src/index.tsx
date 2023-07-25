import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/index.scss'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import '../node_modules/MaaSIVO-UI/dist/style.css'
import { Layout } from 'MaaSIVO-UI'
import { appRoutes } from '@pages/data/routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Layout routes={appRoutes} style={{ boxSizing: 'border-box' }}>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
)
