import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Legends from "./Pages/Legends";
import Seasons from "./Pages/Seasons";
import ScrollToTop from "./components/layout/ScrollToTop";
import BattlePass from "./Pages/BattlePass";
import News from "./Pages/News";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />

      {!isHome && <Header />}

      <main className={`${!isHome ? "pt-20" : ""} min-h-screen bg-black`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/battlepass" element={<BattlePass />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>

      {!isHome && <Footer />}
    </>
  );
}

export default App;