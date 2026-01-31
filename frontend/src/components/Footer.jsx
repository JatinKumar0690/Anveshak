import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section pt-5 pb-3 border-top border-secondary border-opacity-10 mt-5">
      <div className="container">
        <div className="row g-4">
          
          {/* column */}
          <div className="col-lg-4 col-md-6">
            <h4 className="brand-text fw-bold mb-3" style={{ color: '#00B4D8' }}>ANVESHAK</h4>
            <p className="text-secondary small pe-lg-5">
              Empowering job seekers with AI-driven resume insights. 
              Built with the MERN stack and Google Gemini 2.5.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link" style={{textDecoration: "none"}}>About</Link></li>
              <li className="mb-2"><Link to="/" className="footer-link" style={{textDecoration: "none"}}>How it Works</Link></li>
              <li className="mb-2"><Link to="/" className="footer-link" style={{textDecoration: "none"}}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* support buttons */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3 text-uppercase small tracking-wider">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link  style={{textDecoration: "none"}} href="/" className="footer-link">Contact Support</Link></li>
              <li className="mb-2"><Link  style={{textDecoration: "none"}} href="/" className="footer-link">Documentation</Link></li>
              <li className="mb-2"><Link  style={{textDecoration: "none"}} href="/" className="footer-link">API Access</Link></li>
            </ul>
          </div>

          {/* Relatd buttons*/}
          <div className="col-lg-4 col-md-6">
            <div className="p-4 rounded-3 bg-dark border border-secondary border-opacity-25">
              <h6 className="text-white fw-bold mb-2 small">Stay Updated</h6>
              <p className="text-secondary x-small mb-3">Get the latest tips on beating ATS systems.</p>
              <div className="input-group">
                <input type="email" className="form-control bg-transparent border-secondary text-white" placeholder="Email" />
                <button className="btn btn-info text-dark fw-bold px-3" >Join</button>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-secondary opacity-10 my-4" />

        {/* copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary x-small mb-0">
              © {currentYear} Anveshak AI. Designed & Developed by <span className="text-info">Jatin Kumar</span>.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <span className="text-secondary x-small">Built for the 2026 Developer Internship Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;