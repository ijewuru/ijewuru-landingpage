import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landingpage } from "./pages/Landingpage";
import { Product } from "./pages/Product";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
