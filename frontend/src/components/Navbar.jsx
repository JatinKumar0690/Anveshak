import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-4 py-3 shadow-sm sticky-top">
      <Link to="/" className="navbar-brand brand-text fs-4">
        🧠 Anveshak
      </Link>
      <button
        className="navbar-toggler border-0 shadow-none" 
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#anveshakNav"
        aria-controls="anveshakNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="anveshakNav">
        <ul className="navbar-nav ms-auto gap-2">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">
              Home
            </NavLink>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/upload">
                  Analyze Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-outline-info">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="btn btn-info text-dark fw-semibold"
                  to="/register"
                >
                  Get Started
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
