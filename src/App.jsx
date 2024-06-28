import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "components";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "pages/home";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
