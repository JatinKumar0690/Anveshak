const ATSResult = ({ result }) => {
  return (
    <div className="card result-card p-4 mt-4 col-md-8 mx-auto border-0 shadow-lg">
     
      <h3 className="brand-text mb-4 text-center fw-bold" style={{ color: '#00B4D8' }}>
        Analysis Result
      </h3>

      <div className="mb-4 text-center">
        <label className="text-uppercase tracking-wider small text-secondary fw-bold mb-1">
          ATS Score
        </label>
        <div>
          
          <h1 className="display-3 fw-bold text-white mb-0">{result.atsScore}</h1>
          <div className="score-underline mx-auto"></div>
        </div>
      </div>

      <hr className="border-secondary opacity-25 my-4" />

      <div className="row g-4">
      
        <div className="col-md-6">
          <h6 className="text-success fw-bold mb-3 d-flex align-items-center">
            <span className="dot bg-success me-2"></span> Matched Skills
          </h6>
          <div className="d-flex flex-wrap">
            {result.matchedSkills.length ? (
              result.matchedSkills.map((skill, i) => (
                <span key={i} className="skill-badge bg-success-soft text-success">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-muted italic small">No matched skills found</p>
            )}
          </div>
        </div>

        
        <div className="col-md-6">
          <h6 className="text-danger fw-bold mb-3 d-flex align-items-center">
            <span className="dot bg-danger me-2"></span> Missing Skills
          </h6>
          <div className="d-flex flex-wrap">
            {result.missingSkills.length ? (
              result.missingSkills.map((skill, i) => (
                <span key={i} className="skill-badge bg-danger-soft text-danger">
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-info bg-dark-cyan-soft p-2 rounded small w-100">
                No missing skills 🎉
              </p>
            )}
          </div>
        </div>
      </div>

      
      <div className="mt-5 p-3 feedback-box rounded-3">
        <h6 className="text-warning fw-bold mb-2">Improvement Feedback</h6>
        <ul className="text-light-50 mb-0">
          {result.feedback.map((item, i) => (
            <li key={i} className="mb-1 text-danger">{item}</li>
          ))}
        </ul>
      </div>
      <div 
  className="bg-dark p-4 rounded shadow-sm" 
  style={{ 
    whiteSpace: "pre-line", 
    borderLeft: "4px solid #00B4D8", 
    lineHeight: "2",          
    fontSize: "0.9rem",
    color: "#E0E0E0",
    fontFamily: "Inter, sans-serif" 
  }}
>
  {result.aiSuggestions || "Formatting analysis..."}
</div>
    </div>
  );
};

export default ATSResult;