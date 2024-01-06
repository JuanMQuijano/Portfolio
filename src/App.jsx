import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import "animate.css"

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} >
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
