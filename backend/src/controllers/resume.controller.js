const fs = require("fs");
const pdf = require("pdf-parse-fork");
const extractSkills = require("../services/skillExtractor.service.js");
const calculateATSScore = require("../services/atsScore.service.js");
const jobRoles = require("../services/jobRoles.config.js");
const analyzeResumeWithAI = require("../services/aiAnalysis.service.js");

exports.uploadResume = async (req, res) => {
  try {
    const { role } = req.body;
    if (!req.file || !role ) {
      return res.status(400).json({ success: false, message: "Resume PDF and job role are required" });
    }

    const fileBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(fileBuffer);
    const resumeText = data.text || "";

    fs.unlinkSync(req.file.path);
    const matchedSkills = extractSkills(resumeText, role);
    const totalSkills = jobRoles[role]?.length || 1;
    const atsResult = calculateATSScore (
      resumeText,
      matchedSkills,
      totalSkills
    );
    const missingSkills = jobRoles[role].filter(
      skill => !matchedSkills.includes(skill)
    );
    const aiSuggestions = await analyzeResumeWithAI({
      resumeText,
      role,
      atsScore: atsResult.atsScore,
      missingSkills
    })

    res.status(200).json({
      success: true,
      atsScore: atsResult.atsScore,
      feedback: atsResult.feedback,
      matchedSkills,
      missingSkills,
      aiSuggestions,
    });
  } catch (error) {
    console.error("ATS Error:", error.message);
    res.status(500).json({ message: "Resume analysis failed" });
  }
};
