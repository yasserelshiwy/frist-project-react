import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [navActive, setNavActine] = useState("hidden");
  const navToggle = () => {
    navActive === "hidden"
      ? setNavActine("heidden block")
      : setNavActine("hidden");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg z-[99999] bg-[#2c3e50] shadow p-4 fixed top-0 left-0 right-0 trainsition-[hight] ease-in-out duration-200  ">
        <div className="container py-2">
          <div className="inear flex justify-between items-center  ">
            <div className="inear flex justify-between items-center w-full ">
              <div className=" lg:flex justify-between items-center w-full">
                <Link to="/">
                  <h1 className="text-2xl md:text-[32px] font-bold text-white uppercase md:ml-10 py-[5px]">
                    Start Framework
                  </h1>
                </Link>

                <ul
                  className={` ul ${navActive} transition-all duration-700 lg:flex  text-white font-bold uppercase mr-16  md:ml-10 `}
                >
                  <li className="p-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-[#1abc9c] p-2 rounded-md" : "p-2"
                      }
                      to="/About"
                    >
                      about
                    </NavLink>
                  </li>
                  <li className="p-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-[#1abc9c] p-2 rounded-md" : "p-2"
                      }
                      to="/portfolio"
                    >
                      portfolio
                    </NavLink>
                  </li>
                  <li className="p-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-[#1abc9c] p-2 rounded-md" : "p-2"
                      }
                      to="/contact"
                    >
                      contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <button
                onClick={navToggle}
                className=" btn absolute top-8 right-8 md:top-[28px] md:right-[50px] lg:hidden border-[1px] border-gray-800 rounded-md focus:border-[3px] "
              >
                <i className="fa-solid fa-bars text-2xl text-gray-800   py-[6px] px-4 font-light "></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
