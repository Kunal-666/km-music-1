import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon.svg";
import loginIcon from "../assets/login-icon.svg";

const Navbar = ({ navType }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Trending Song",
    "Upcoming Song",
    "Artists",
    "Contact",
  ];

  const routeMap = {
    Home: "/",
    About: "/about",
    "Trending Song": "/songs",
    "Upcoming Song": "/upcoming",
    Artists: "/artists",
    Contact: "/contact",
  };

  // NAVBAR STYLE BASED ON navType


  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all 
    ${
      navType === "transparent"
      ? "bg-[#111]/70 border-b border-[#303030]"
      : "bg-[#111] border-b border-[#303030]"
  }
`}
>

      <div className="max-w-[1920px] mx-auto px-12 py-4">
        <div className="flex items-center gap-12">

          {/* LOGO */}
          <Link to="/" onClick={() => setActiveLink("Home")}>
            <img src={logo} alt="KM Logo" className="h-20 w-auto" />
          </Link>

          {/* SEARCH BAR */}
          <div className="hidden md:flex flex-1 max-w-[420px]">
            <div className="
              relative flex items-center 
              bg-[#3D3D3D] rounded-[22px]
              px-6 py-3 w-full shadow-[0_0_10px_rgba(0,0,0,0.45)]
            ">
              <input
                type="text"
                placeholder="Search Here"
                className="flex-1 bg-transparent text-white placeholder:text-gray-300 text-base outline-none"
              />
              <img src={searchIcon} alt="search" className="w-5 h-5 ml-3 opacity-80" />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden lg:block h-10 w-px bg-[#3A3A3A]"></div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={routeMap[link]}
                onClick={() => setActiveLink(link)}
                className={`
                  text-[18px] font-medium transition-all
                  ${activeLink === link ? "text-white" : "text-[#7A7A7A] hover:text-white"}
                `}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* LOGIN BUTTON */}
          <button
            className="
              flex items-center gap-2 
              bg-[#246BFD] rounded-full 
              px-7 py-3 text-white text-sm font-medium 
              shadow-[0_0_12px_rgba(36,107,253,0.45)]
              hover:bg-[#1e5dd9] transition
            "
          >
            Login
            <img src={loginIcon} alt="login" className="w-4 h-4" />
          </button>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden p-2 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#303030] pt-4">
            {/* MOBILE SEARCH */}
            <div className="mb-4">
              <div className="relative flex items-center bg-[#3F3F3F] rounded-full px-6 py-3">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="flex-1 bg-transparent text-white placeholder:text-white text-base outline-none"
                />
                <img src={searchIcon} alt="search" className="w-5 h-5 ml-3" />
              </div>
            </div>

            {/* MOBILE NAV LINKS */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={routeMap[link]}
                  onClick={() => {
                    setActiveLink(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    text-left text-lg font-medium transition-colors py-2
                    ${activeLink === link ? "text-white" : "text-[#7A7A7A] hover:text-white"}
                  `}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
