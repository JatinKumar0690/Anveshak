const jobRoles = require("../services/jobRoles.config.js");

const extractSkills = (resumeText, role) => {
    if(!resumeText || !role) return [];
    const text = resumeText.toLowerCase();
    const roleSkills = jobRoles[role] || [];
    const matchedSkills = roleSkills.filter(skill =>
        text.includes(skill.toLowerCase())
    );
    return matchedSkills;
}

module.exports = extractSkills;