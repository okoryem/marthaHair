import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HairSalonWebsite from "./HairSalonWebsite"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HairSalonWebsite />} />
      </Routes>
    </Router>
  )
}

export default App
