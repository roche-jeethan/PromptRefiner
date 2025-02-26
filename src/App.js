import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Footer from "./components/Footer";
import ApiDocs from "./pages/ApiDocs";

function App() {
  return (
      <Router>
        <div className={"flex flex-col min-h-screen"}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/apidocs" element={<ApiDocs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
