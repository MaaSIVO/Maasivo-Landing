import React from 'react'
import { Home } from '@pages/Home'
import { MaaS } from '@pages/MaaS'
import { MaaSIVO } from '@pages/MaaSIVO'
import { Travit } from '@pages/Travit'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-us',
    element: <MaaSIVO />,
  },
  {
    path: '/maas',
    element: <MaaS />,
  },
  {
    path: '/travit',
    element: <Travit />,
  },
])
