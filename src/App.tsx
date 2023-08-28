import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { RootLayout } from './components'
import { Home, MaaS, MaaSIVO, Travit } from './pages'

export const App = () => <div></div>
/*
      {router.map((r) => (
        <Route
          path={r.path}
          key={r.path}
          element={<RootLayout>{r.element}</RootLayout>}
        />
      ))}

            <Route path="/about-us" element={<MaaSIVO />} />{' '}
      <Route path="/maas" element={<MaaS />} />{' '}
      <Route path="/travit" element={<Travit />} />
*/
