import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import Error from "./pages/Error"
import RouteProtect from "./pages/RouteProtect"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<RouteProtect element={<Success />} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App