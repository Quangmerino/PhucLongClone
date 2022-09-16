import Header from "./pages/Layouts/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Layouts/Footer";
import HomePage from "./pages/Home";
import CoffeePage from "./pages/Coffee";
import TeaPage from "./pages/Tea";
import DrinkPage from "./pages/Drinks";
import ProductPage from "./pages/Products";
import SalePage from "./pages/Sales";
import AboutPage from "./pages/About";
import CardPage from "./pages/Card";
import MessageUs from "./components/MessageUs";
import CallUs from "./components/CallUs";
import RecruitPage from "./pages/Recruit";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop"

function App() {

  const [show, setShow] = useState(false);

  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className="overflow-hidden">
      <Header />
      <main className="mt-[60px] md:mt-[125px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/tea" element={<TeaPage />} />
          <Route path="/drinks" element={<DrinkPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/sales" element={<SalePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
        </Routes>
      </main>
      <Footer />
      <MessageUs/>
      <CallUs/>
      {
        show && <BackToTop/>
      }
    </div>
  );
}

export default App;
