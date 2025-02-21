import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Footer from "./components/Footer";
import bgWhite from "./assets/bg-white.svg";
import bgDark from "./assets/bg-dark.svg";

function App() {
  return (
      <Router>
        <div className={`flex flex-col min-h-screen ${bgWhite} dark:${bgDark} bg-pattern bg-fixed bg-cover`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
