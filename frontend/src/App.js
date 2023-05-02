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
import Vendorlog from "./pages/login/vendorlog";
import VendorPage from "./pages/vendorList/VendorsPage";
import VendorReg from "./pages/login/vendorReg";
import Ticket from "./components/concertTicket/Ticket";
import VendorPersonalPage from "./pages/vendorList/VendorPersonalPage";
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
          <Route path="/vendorlog" element={<Vendorlog />} />
          <Route path="/vendorReg" element={<VendorReg />} />

          {/* <Route path="/concert" element={<Concert />} /> */}
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/t" element={<Ticket />} />
          <Route path="/vendor/:vendorId" element={<VendorPersonalPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
