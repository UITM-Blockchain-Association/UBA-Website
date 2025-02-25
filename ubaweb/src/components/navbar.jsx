import { Outlet, NavLink, useLocation } from "react-router-dom";
import "/src/assets/css/navbar.css";

const Navbar = () => {
  const location = useLocation(); // Get current path

  const navLinks = [
    { path: "/events", label: "Events" },
    { path: "/team", label: "Team" },
    { path: "/", label: "Home", isLogo: true }, // Mark home as logo
    { path: "/aboutus", label: "About Us" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={location.pathname === link.path ? "active" : ""}
            >
              <NavLink to={link.path}>
                {link.isLogo ? (
                  <img
                    src="/ubalogo3dstaticimage.png"
                    alt="Home"
                    className="nav-logo"
                  />
                ) : (
                  link.label
                )}
              </NavLink>
              {location.pathname === link.path && <span className="dot"></span>}
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
