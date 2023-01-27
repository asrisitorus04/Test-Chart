import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact element={<Dashboard />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App