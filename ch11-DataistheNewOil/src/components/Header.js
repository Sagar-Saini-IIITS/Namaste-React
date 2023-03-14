import { useState,useContext } from "react";
import Logo from "../assets/img/applogo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="h-20 w-30" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className="px-3 flex justify-between bg-orange-400">
      <Title />
      <div className="p-1 my-[auto]">
        <ul className="flex">
          <li className="nav-item">
            <Link to="/">Home </Link>
          </li>

          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li className="nav-item">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
      <span className="my-auto font-bold text-sky-100 mr-2">{user.name}</span>
      <h1 className="my-[auto]">{isOnline ? "✅" : "🔴"}</h1>
       </div>
      {isLoggedIn ? (
        <button className="mr-5 font-[500] px-2 bg-red-500 text-white h-10 my-[auto] rounded-xl hover:scale-110" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="mr-5 font-[500] px-2 bg-red-500 text-white h-10 my-[auto] rounded-xl hover:scale-110" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
