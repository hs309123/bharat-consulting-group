import { useState } from "react";
import {
  PaperAirplaneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <Link to="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                  <span>Paper.io</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden md:flex gap-8 ">
                <Link to="/" className="">Home</Link>
                <Link to="/Contact">Benefits</Link>
                <Link to="/Contact">Our Classes</Link>
                <Link to="/Contact">Contact Us</Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? (
                    <XMarkIcon className="h-6" />
                  ) : (
                    <Bars3Icon className="h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
            }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <Link to="/Services" className="border-l-4 border-gray-600">
                Features
              </Link>
              <Link to="/Contact">Pricing</Link>
              <Link to="/Contact">Download</Link>
              <Link to="/Contact">Classic</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
