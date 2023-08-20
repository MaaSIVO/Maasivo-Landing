import React from 'react'
import { Home } from '@pages/Home'
import { MaaS } from '@pages/MaaS'
import { MaaSIVO } from '@pages/MaaSIVO'
import { Travit } from '@pages/Travit'
import { PathRouteProps } from 'react-router-dom'

export const router: PathRouteProps[] = [
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
]
