import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home.tsx"
import ResultPage from "./pages/result.tsx"
import LoginPage from "./pages/login.tsx"
import RegisterPage from "./pages/register.tsx"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
