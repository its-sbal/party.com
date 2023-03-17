import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/about";
import HomeMain from "./components/HomeMain";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <p>working</p>
      <Landing />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<HomeMain />} />
          <Route path="/contact-us" element={<HomeMain />} />
          <Route path="/sign-up" element={<HomeMain />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
