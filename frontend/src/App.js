import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./cred/reducers";

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
import ConcertCard from "./cred/ConcertCard";
// import Concert from "./cred/concertTicket";
import Cart from "./cred/Cart";
import BookedCart from "./cred/bookedCart";
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      {/* <Landing /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Cart />} />
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
          <Route path="/c" element={<ConcertCard />} />
          <Route path="/vendor/:vendorId" element={<VendorPersonalPage />} />
          <Route path="/user/:userId" element={<BookedCart />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
