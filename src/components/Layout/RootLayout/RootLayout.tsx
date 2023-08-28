import React from 'react'
import { Layout } from 'maasivo-ui'
import { Outlet, useNavigate } from 'react-router-dom'
import { appRoutes } from '@data/routes'
import { maasivoSocialMedia } from '@data/layout'

export const RootLayout = () => {
  const navigate = useNavigate()
  return (
    <Layout
      routes={appRoutes}
      footerTitle="Contáctanos"
      icons={maasivoSocialMedia}
      onLogoClick={() => navigate('/')}
      style={{ boxSizing: 'border-box' }}
      onRouteClick={(path) => navigate(path)}
      rights="© MaaSIVO 2023 | Innovación en Movimiento"
    >
      <Outlet />
    </Layout>
  )
}
