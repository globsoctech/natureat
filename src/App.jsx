import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Gate from "./components/Gate.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Horeca from "./pages/Horeca.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { useEffect } from "react";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Gate>
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/produkt/:slug" element={<Product />} />
          <Route path="/koszyk" element={<Cart />} />
          <Route path="/konto" element={<Account />} />
          <Route path="/horeca" element={<Horeca />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Gate>
  );
}
