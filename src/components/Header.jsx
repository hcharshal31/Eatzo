import { lazy, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import eatzoLogo from "../assets/eatzologo.png";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between h-30 p-4 bg-amber-300 items-center shadow-lg fixed top-0 left-0 w-full z-10">
      <Link to="/">
        <img
          id="logo"
          alt="Food App Logo"
          src={eatzoLogo}
          className="w-28 pl-5"
        />
      </Link>
      <ul className="flex justify-between w-1/2">
        <li className="text-white text-shadow-lg text-xl">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </li>
        <li>
          <Link to="/" className="text-white text-shadow-lg text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-shadow-lg text-xl">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-shadow-lg text-xl">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white text-shadow-lg text-xl">
            Cart({cartItems.length} Items)
          </Link>
        </li>
        {/* <li>
          <Link to="/grocery" className="text-white text-shadow-lg text-xl">
            Grocery
          </Link>
        </li> */}
        <li>
          <button
            className="login bg-blue-500 w-20 text-white border-0 h-8 rounded-md hover:cursor-pointer"
            onClick={() => {
              btnValue === "Login"
                ? setBtnValue("Logout")
                : setBtnValue("Login");
            }}
          >
            {btnValue}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
