import React, { FC, ReactNode } from 'react'
import { Layout } from 'MaaSIVO-UI'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from 'data/routes'

export interface RootLayoutProps {
  children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <Layout
      routes={appRoutes}
      style={{ boxSizing: 'border-box' }}
      onLogoClick={() => navigate('/')}
      onRouteClick={(path) => navigate(path)}
    >
      {children}
    </Layout>
  )
}
