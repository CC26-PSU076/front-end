import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home.tsx"
import ResultPage from "./pages/result.tsx"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
