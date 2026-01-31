import { useState } from "react";
import api from "../services/api.js";
import ATSResult from "../components/ATSResult.jsx";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file || !role) {
      setError("Please select a job role and upload a PDF resume.");
      return;
    }

    setLoading(true);
    setError(""); 
    setResult(null);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("role", role);

    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/api/resume/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      setResult(res.data);
    } catch (err) {
      const serverMessage = err.response?.data?.message || "Analysis failed. Please try again.";
      setError(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 flex-grow-1 d-flex flex-column justify-content-center upload-resume">
      
      <div className={`card card-custom p-4 col-md-8 mx-auto shadow-lg border-0 ${!result ? "my-auto" : "mt-4"}`}>
        <h4 className="brand-text mb-4 text-center fw-bold" style={{ color: "#00B4D8" }}>
          Analyze Your Resume
        </h4>

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="text-secondary small fw-bold mb-2 text-uppercase tracking-wider">
              Target Job Role
            </label>
            <select
              className="form-select bg-dark text-white border-secondary shadow-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ borderRadius: "8px", cursor: "pointer" }}
            >
              <option value="">Select Job Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="mern">MERN Developer</option>
              <option value="data_analyst">Data Analyst</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label className="text-secondary small fw-bold mb-2 text-uppercase tracking-wider">
              Resume (PDF Only)
            </label>
            <input
              type="file"
              accept=".pdf"
              className="form-control bg-dark text-white border-secondary shadow-sm"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ borderRadius: "8px" }}
            />
          </div>

          {/*  Button */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold shadow-glow border-0"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                AI is Analyzing...
              </>
            ) : (
              "Analyze Resume"
            )}
          </button>
        </form>

        {/* Error alert UI */}
        {error && (
          <div 
            className="mt-4 text-center py-2 px-3 rounded-3 animate-fade-in" 
            style={{ 
              backgroundColor: 'rgba(220, 53, 69, 0.1)', 
              border: '1px solid #dc3545', 
              color: '#ff6b6b',
              fontSize: '0.85rem'
            }}
          >
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>

      {/* Analysis Result Section */}
      {result && (
        <div className="mt-5 animate-fade-in">
          <ATSResult result={result} />
          
       
          <div className="text-center mt-4">
             <button 
                className="btn btn-outline-info btn-sm opacity-75"
                onClick={() => {setResult(null); setFile(null); setRole("");}}
             >
                Analyze Another Resume
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadResume;