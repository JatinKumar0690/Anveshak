import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="card card-custom p-5 text-center">
        <h1 className="brand-text display-3 fw-bold">404</h1>
        <h4 className="text-light">Page Not Found</h4>
        <p className="text-white mt-2">
          You entered a wrong URL. Redirecting to Home in 5 seconds...
        </p>

        <button onClick={() => navigate("/")} className="btn btn-primary mt-3">
          Go Home Now
        </button>
      </div>
    </div>
  );
};

export default NotFound;
