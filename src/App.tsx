import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Navbar from "./components/Navbar";
import "./app.css";

function App() {
  return (
    <main className="app">
      <section className="navbarCon">
        <Navbar />
      </section>
      <section className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
