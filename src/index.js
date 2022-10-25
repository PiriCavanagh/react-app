import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Room from "./pages/room";
import Fetch from "./components/Fetch"

const fetchData = () => {
  return fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => console.log(data));}

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="fetch" element={<Fetch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));