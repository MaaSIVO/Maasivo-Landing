import React from 'react'
import { Layout } from 'MaaSIVO-UI'
export const Home = () => {
  return (
    <div>
      <Layout
        contentStyle={{ border: '1px solid red' }}
        routes={[
          { label: 'MaaSIVO', path: '' },
          { label: 'Travit', path: '' },
          { label: 'MaaS', path: '' },
        ]}
      >
        <div>HELLOWWWWWW</div>
      </Layout>
    </div>
  )
}
