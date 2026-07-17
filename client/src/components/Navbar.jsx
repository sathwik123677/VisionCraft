import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt=""
          className="w-28 sm:w-32 lg:w-40"
        />
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-3 mr-32">
        {/* Home */}
        <p
          onClick={() => navigate("/")}
          className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            location.pathname === "/"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          Home
        </p>
          <p
  onClick={() => navigate("/gallery")}
  className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
    location.pathname === "/gallery"
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
  }`}
>
  Gallery
</p>
        {/* Pricing */}
        <p
          onClick={() => navigate("/buy")}
          className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
            location.pathname === "/buy"
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          Pricing
        </p>
      </div>

      {user ? (
        <div className="flex items-center gap-5">
          {/* Create Button */}
          <button
            onClick={() => navigate("/result")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200"
          >
            <span className="text-xl font-light text-blue-600">+</span>
            <span className="text-sm font-medium text-blue-600">
              Create
            </span>
          </button>

          {/* Credits */}
          <div className="flex items-center gap-2">
            <img
              src={assets.credit_star}
              alt=""
              className="w-5"
            />
            <p className="text-sm font-medium text-gray-600">
              Credits: <span className="font-semibold">{credit}</span>
            </p>
          </div>

          {/* User Name */}
          <p className="text-gray-600 max-sm:hidden">
            Hi, {user.name}
          </p>

          {/* Profile */}
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-10 drop-shadow cursor-pointer"
            />

            <div className="absolute hidden group-hover:block top-0 right-0 z-10 pt-12">
              <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm shadow-md">
                <li
                  onClick={logout}
                  className="py-1 px-2 pr-10 cursor-pointer hover:bg-gray-100 rounded"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <p
            onClick={() => navigate("/buy")}
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            Pricing
          </p>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;