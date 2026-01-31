const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResumeWithAI = async ({
  resumeText,
  role,
  missingSkills,
  atsScore,
}) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `
        You are an ATS Resume Optimizer. Provide a high-impact analysis for the ${role} role.
    
    RULES:
    - ONLY use bullet points.
    - No paragraphs.
    - No asterisks (*).
    - Use a dash (-) for every bullet.
    - Max 3 bullets per section.

    STRUCTURE:
    
    CORE SUMMARY
    - [Bullet 1]
    - [Bullet 2]

    CRITICAL SKILL GAPS
    - [Bullet 1]
    - [Bullet 2]

    IMPROVEMENT CHECKLIST
    - [Bullet 1]
    - [Bullet 2]
    - [Bullet 3]
        """
        ${resumeText.substring(0, 3000)}
        """
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().replace(/\*/g, "");
    const cleanText = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join("\n\n"); 

    return cleanText;
  } catch (error) {
    console.error("GEMINI AI error", error.message);
    return "AI analysis failed please try again later";
  }
};

module.exports = analyzeResumeWithAI;
