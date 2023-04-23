import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Services from "./pages/services/Services";
import Footer from "./components/Footer";
import About from "./pages/navBarItems/about";
import HomeMain from "./components/HomeMain";
import Landing from "./pages/login/landing";
import Birthday from "./pages/events/birthdayEvent";
import Signin from "./pages/login/signin";
import ContactForm from "./pages/navBarItems/ContactUs";
// import Concert from "./cred/concertTicket";

function App() {
  return (
    <>
      {/* <Landing /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/sign-up" element={<HomeMain />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/concert" element={<Concert />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
