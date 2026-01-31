import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="home-wrapper py-5">
      {/* Hero section */}
      <div className="container">
        <div className="hero-card p-5 text-center shadow-lg border-0 rounded-4 mb-5">
          <div className="badge rounded-pill bg-info bg-opacity-10 text-info px-3 py-2 mb-4 border border-info border-opacity-25">
            ✨ Powered by Gemini 2.5 AI
          </div>
          <h1 className="display-3 fw-bold mb-3 text-white">
            Master Your <span className="text-gradient">ATS Score</span>
          </h1>
          <p
            className="mx-auto text-secondary mb-5 fs-5 mt-3"
            style={{ maxWidth: "700px" }}
          >
            Anveshak analyzes your resume against industry standards, uncovers
            hidden skill gaps, and provides professional AI-driven suggestions
            to get you hired
          </p>
          <div className="d-flex justify-content-center gap-4 mt-2 flex-wrap">
            <Link
              to="/upload"
              className="btn btn-primary btn-lg px-5 py-3 shadow-glow border-0"
            >
              Analyze Resume now
            </Link>
            {token ? (
              <>
                <Link
                  to="/upload"
                  className="btn btn-outline-light btn-lg px-5 py-3 border-opacity-25"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-light btn-lg px-5 py-3 border-opacity-25"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Features section */}
        <div className="row g-4 mb-5 mt-2">
          {[
            {
              icon: "🎯",
              title: "ATS Scoring",
              desc: "Our algorithm simulates real-world recruiter screening systems.",
            },
            {
              icon: "🔍",
              title: "Skill Analysis",
              desc: "Instant gap reports for MERN, Frontend, and Backend roles.",
            },
            {
              icon: "💡",
              title: "AI Insights",
              desc: "Detailed bullet-point suggestions to improve your impact.",
            },
          ].map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-box h-100 p-4 rounded-4 transition-hover shadow-sm">
                <div className="fs-1 mb-3">{feature.icon}</div>
                <h5 className="text-white fw-bold mb-3">{feature.title}</h5>
                <p className="text-secondary mb-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Information Section */}
        <div className="row g-4 align-items-center mt-5 pt-4">
          <div className="col-md-6">
            <div className="p-4 rounded-4 bg-glass border border-white border-opacity-10 h-100">
              <h3 className="text-white fw-bold mb-3">Why Anveshak?</h3>
              <p className="text-secondary fs-6 leading-relaxed">
                75% of resumes are rejected by robots before a human even sees
                them. Anveshak gives you the "Recruiter's View" of your profile,
                helping you reclaim control of your job search.
              </p>
              <div className="d-flex align-items-center mt-4 text-info fw-bold">
                Optimized for the 2026 Job Market
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25 h-100">
              <h4 className="text-white fw-bold mb-4">Three Simple Steps</h4>
              <div className="step-item d-flex gap-3 mb-3">
                <span className="step-num">1</span>
                <p className="text-secondary mt-1">
                  Upload your PDF resume securely.
                </p>
              </div>
              <div className="step-item d-flex gap-3 mb-3">
                <span className="step-num">2</span>
                <p className="text-secondary mt-1">
                  Select your target tech stack.
                </p>
              </div>
              <div className="step-item d-flex gap-3">
                <span className="step-num">3</span>
                <p className="text-secondary mt-1">
                  Receive your AI-powered growth report.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* TRUST STATISTICS */}
        <div className="container mt-5 py-5 border-top border-secondary border-opacity-10">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white mb-0">15k+</h2>
              <p className="text-secondary small text-uppercase tracking-wider">
                Resumes Scanned
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white mb-0">98%</h2>
              <p className="text-secondary small text-uppercase tracking-wider">
                AI Accuracy
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white mb-0">2.5s</h2>
              <p className="text-secondary small text-uppercase tracking-wider">
                Analysis Speed
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold text-white mb-0">Zero</h2>
              <p className="text-secondary small text-uppercase tracking-wider">
                Data Retention
              </p>
            </div>
          </div>
        </div>

        {/* THE TECHNOLOGY SECTION (Great for Internships!) */}
        <div className="container my-5">
          <div className="p-5 rounded-4 bg-gradient-dark border border-secondary border-opacity-10">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="text-white fw-bold mb-4">
                  Under the Hood: How it Works
                </h2>
                <div className="mb-4">
                  <h6 className="text-info fw-bold">01. PDF Vector Parsing</h6>
                  <p className="text-secondary">
                    We convert binary PDF data into structured text streams,
                    preserving document hierarchy.
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-info fw-bold">
                    02. Semantic Skill Mapping
                  </h6>
                  <p className="text-secondary">
                    Our algorithm cross-references your text against a database
                    of 500+ tech-stack requirements.
                  </p>
                </div>
                <div className="mb-0">
                  <h6 className="text-info fw-bold">03. LLM Reasoning</h6>
                  <p className="text-secondary">
                    Gemini 2.5 Flash analyzes the context of your experience,
                    not just keywords, to provide expert advice.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block text-center">
                <div className="tech-stack-badge-container p-4 bg-dark rounded-circle border border-info border-opacity-25 d-inline-block">
                  <span className="display-4">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action botton */}
        <div className="container pb-5">
          <div className="cta-box text-center p-5 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-25">
            <h3 className="text-white fw-bold">Ready to outsmart the bots?</h3>
            <p className="text-secondary mb-4">
              Stop guessing. Start optimizing.
            </p>
            {token ? (
              <>
                <Link
                  to="/upload"
                  className="btn btn-primary px-5 py-3 shadow-glow"
                >
                  Analyze Now — It's Free
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary px-5 py-3 shadow-glow"
                >
                  Analyze Now — It's Free
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
