import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Trending from "./pages/Trending";
import Artists from "./pages/Artists";
import Artistsmusic from "./pages/Artistsmusic";
import Upcoming from "./pages/Upcoming";
function AppContent() {
  const location = useLocation();

  let navType = "black";

  // Transparent navbar pages
  if (
    location.pathname === "/about" ||
    location.pathname === "/songs" ||
    location.pathname === "/artists" ||
    location.pathname.startsWith("/artist") ||
    location.pathname === "/upcoming" 
  ) {
    navType = "transparent";
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar navType={navType} />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/songs" element={<Trending />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:name" element={<Artistsmusic />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
