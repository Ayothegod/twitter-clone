import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
<>
    <Routes>
      <Route  element={<Home/>}></Route>
    </Routes>
</>
    )
}

export default App;
