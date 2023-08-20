import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router } from './routes'
import { RootLayout } from './components'

export const App = () => (
  <BrowserRouter>
    <Routes>
      {router.map((r) => (
        <Route
          path={r.path}
          element={<RootLayout>{r.element}</RootLayout>}
          key={r.path}
        />
      ))}
    </Routes>
  </BrowserRouter>
)
