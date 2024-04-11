import { useState } from "react";
import { PaperAirplaneIcon, Bars3Icon } from "@heroicons/react/24/outline";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="w-5/6 mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* black menu and logo */}
            <div className="flex items-center gap-8 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-black" />
                  <span>Paper.io</span>
                </a>
              </div>
              {/* black */}
              <div className="hidden lg:flex items-end gap-8 text-black ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center text-black">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-1/6  bg-gray-500 overflow-hidden flex flex-col lg:hidden gap-16  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600 text-black">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

// const menuOption = ["ABOUT", "SERVICES", "CONTACT US"];

// const Header = () => {
//   return (
//     <div className="bg-[#2F302C] text-white px-2 py-6 sm:px-4 flex justify-around items-center border-b-8 border-[#e0aa3e]">
//       <div className="flex justify-start items-center gap-2">
//         <img
//           className="max-[350px]:h-5 h-9"
//           src="/Images/Logo.jpg"
//           alt="logo"
//         />
//         <h1 className="max-[350px]:text-xl text-2xl hover:text-[#edc967] font-semibold cursor-pointer">
//           Bharat Consulting Group
//         </h1>
//       </div>
//       <div className="flex justify-center items-center gap-16">
//         {menuOption.map((op) => (
//           <button className="hover:text-[#edc967]" key={op}>
//             {op}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;
