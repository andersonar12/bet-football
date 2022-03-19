import { useContext } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const navLinks = [
  { name: "Sports", link: "/home" },
  { name: "Live", link: "/page1" },
  { name: "Promotions", link: "/page2" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const { setUser } = useContext(AuthContext);

  const toLogin = () => {
    // setUser({ name: "", logged: false });
    navigate("/login", { state: pathname }); //guardamos en el state del router la ultima pagina visitada
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center">
          <img
            src={require("../assets/images/bet-logo.png")}
            width="100"
            alt=""
            className="mr-3"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            {navLinks.map((item, i) => (
              <NavLink
                className={`${(props: any) =>
                  props.isActive ? "active" : "inactive"} nav-link fw-bolder text-center`}
                key={i}
                to={item.link}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-secondary px-4 fw-bolder mx-3"
              onClick={() => toLogin()}
            >
              LOGIN
            </button>

            <button className="btn btn-primary px-4 my-2 my-sm-0 fw-bolder">REGISTRARSE</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
