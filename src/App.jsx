import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import TransitionWrapper from "./components/TransitionWrapper";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
        <Route path="/menu" element={<TransitionWrapper><Menu /></TransitionWrapper>} />
        <Route path="/gallery" element={<TransitionWrapper><Gallery /></TransitionWrapper>} />
        <Route path="/about" element={<TransitionWrapper><About /></TransitionWrapper>} />
        <Route path="/reservations" element={<TransitionWrapper><Reservations /></TransitionWrapper>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
