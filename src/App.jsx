import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Legends from "./Pages/Legends";
import Seasons from "./Pages/Seasons";
import ScrollToTop from "./components/layout/ScrollToTop";
import BattlePass from "./Pages/BattlePass";
import News from "./Pages/News";
import Signup from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import WelcomeClan from "./Pages/WelcomeClan";
import CustomCursor from "./components/layout/CustomCursor";

function App() {
  const location = useLocation();

  const path = location.pathname.toLowerCase();

  const isHome = path === "/";
  const isSignUp = path === "/signup";
  const isSignIn = path === "/signin";

  const isWelcome = path === "/welcome";
  const shouldShowHeaderFooter = !isHome && !isSignUp && !isSignIn && !isWelcome;

  return (
    <>
      <CustomCursor />
      <ScrollToTop />

      {shouldShowHeaderFooter && <Header />}

      <main className={`${shouldShowHeaderFooter ? "pt-20" : "pt-0"} min-h-screen bg-black w-full overflow-x-hidden`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/battlepass" element={<BattlePass />} />
          <Route path="/news" element={<News />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/welcome" element={<WelcomeClan />} />
        </Routes>
      </main>

      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default App;
