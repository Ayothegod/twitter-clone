import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/message" element={<Message />}></Route>
      </Routes>
    </>
  );
}

export default App;
