import { Link, Outlet } from "react-router-dom";
import '../styles.css'

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#f9f9f9",
    transition: "background-color 0.3s ease",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  };

  const ulStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "1.5rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#777",
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={containerStyle} className="container mx-auto">
          <div className="text-2xl font-bold">MyWebsite</div>
          <ul style={ulStyle}>
            <li>
              <Link to="/" style={linkStyle} onMouseOver={linkHoverStyle}>
                Overview
              </Link>
            </li>
            <li>
              <Link to="/sensors" style={linkStyle} onMouseOver={linkHoverStyle}>
                Sensors
              </Link>
            </li>
            <li>
              <Link to="/ai" style={linkStyle} onMouseOver={linkHoverStyle}>
                Ai
              </Link>
            </li>
            <li>
              <Link to="/learning" style={linkStyle} onMouseOver={linkHoverStyle}>
                Learning
              </Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle} onMouseOver={linkHoverStyle}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;


/*
const Navbar = () => {
  return (
    <>
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyWebsite</div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/sensors" className="hover:text-gray-400">
                Sensors
              </Link>
            </li>
            <li>
              <Link to="/ai" className="hover:text-gray-400">
                Ai
              </Link>
            </li>
            <li>
              <Link to="/learning" className="hover:text-gray-400">
                Learning
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
*/