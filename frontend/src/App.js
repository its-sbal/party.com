import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/about";
import HomeMain from "./components/HomeMain";
import Landing from "./pages/landing";
import Birthday from "./pages/birthday";

function App() {
  return (
    <>
      {/* <Landing /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<HomeMain />} />
          <Route path="/contact-us" element={<HomeMain />} />
          <Route path="/sign-up" element={<HomeMain />} />
          <Route path="/birthday" element={<Birthday />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
