import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import ExecutivePage from "./components/ExecutivePage";
import Commitment from "./components/commitments";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    AboutUs,
    OurAim,
    OurVision,
} from "./pages/AboutUs";
import {
    Services,
    ServicesOne,
    ServicesTwo,
    ServicesThree,
} from "./pages/Services";
import {
    Events,
    EventsOne,
    EventsTwo,
} from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";

function App() {
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (content) => {
      setModalContent(content);
  };

  const handleModalClose = () => {
      setModalContent(null);
  };

  return (
      <Router>
          <div className="main-content">
              <Sidebar onModalOpen={handleModalOpen} />
              <Routes>
                  <Route path="/join" element={<JoinUs onSignUpClick={() => handleModalOpen('signup')} />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/about-us/aim" element={<OurAim />} />
                  <Route path="/about-us/vision" element={<OurVision />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/services1" element={<ServicesOne />} />
                  <Route path="/services/services2" element={<ServicesTwo />} />
                  <Route path="/services/services3" element={<ServicesThree />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/events/events1" element={<EventsOne />} />
                  <Route path="/events/events2" element={<EventsTwo />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/executives" element={<ExecutivePage />}/>
                  <Route path="/commitment" element={<Commitment />}/>
              </Routes>
              {modalContent === 'login' && <Login onClose={handleModalClose} />}
              {modalContent === 'logout' && <Logout onClose={handleModalClose} />}
              {modalContent === 'profile' && <Profile onClose={handleModalClose} />}
              {modalContent === 'signup' && <SignUp onClose={handleModalClose} />}
          </div>
          <Home/>
          <Footer />
      </Router>
  );
}

export default App;