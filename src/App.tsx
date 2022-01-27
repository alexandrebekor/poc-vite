import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Card } from "./pages/Card"
import { Home } from "./pages/Home"

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="card" element={<Card />} />
      </Routes>
    </div>
  )
}

export default App
