import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   const [currentDateTime, setCurrentDateTime] = useState("");

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       const currentDate = new Date();
  //       const day = currentDate.toLocaleString("default", { weekday: "long" });
  //       const date = currentDate.getDate();
  //       const month = currentDate.toLocaleString("default", { month: "long" });
  //       const year = currentDate.getFullYear();
  //       //   const hours = currentDate.getHours();
  //       //   const minutes = currentDate.getMinutes();
  //       const formattedTime = `${day}, ${month} ${date}, ${year}`;
  //       setCurrentDateTime(formattedTime);
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <div className="navbar bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-400 shadow-lg sticky top-0 z-50">
      {/* Navbar Start - Logo */}
      <div className="navbar-start">
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl text-brown-900 font-extrabold tracking-wide"
        >
          ☕ Hot Hot Cold Coffee
        </NavLink>
      </div>

      {/* Navbar Center - Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
                  : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>

          {/* Sign In Link */}
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
                  : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
              }
            >
              Add Coffee
            </NavLink>
          </li>

          {/* Sign Up Link */}
          <li>
            <NavLink
              to="/updateCoffee"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
                  : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
              }
            >
              Update Coffee
            </NavLink>
          </li>

          {/* About Us Link */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
                  : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End  */}
      <div className="navbar-end flex items-center space-x-3">
        {/* Sign In Link */}

        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
              : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
          }
        >
          Sign In
        </NavLink>

        {/* Sign Up Link */}

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm bg-white text-brown-800 font-bold border-brown-800 shadow-md"
              : "btn btn-sm btn-outline text-brown-800 border-brown-800 hover:bg-yellow-500 hover:border-none hover:text-white"
          }
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
