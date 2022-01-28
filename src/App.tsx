import { Route, Routes } from "react-router-dom"
import "./App.css"

import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
