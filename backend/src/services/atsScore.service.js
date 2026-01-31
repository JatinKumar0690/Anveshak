const calculateATSScore = (resumeText, matchedSkills, totalSkills) => {
    let score = 0;
    let feedback = [];
    const skillMatchPercent = (matchedSkills.length / totalSkills) * 100;
    score += skillMatchPercent * 4;
    if(skillMatchPercent < 60 ) {
        feedback.push("Skill section needs improvement");
    }
    if (resumeText.length > 1500) {
        score += 20;
    } else {
        feedback.push("Resume content is too short");
    }
    const keywordChecks = ["projects", "experience", "skills"];
    const keywordScore = keywordChecks.filter(k => 
        resumeText.toLowerCase().includes(k)
    ).length;
    score += (keywordScore / keywordChecks.length) * 25;
    if(keywordScore < 2) {
        feedback.push("Important resume sections missing");
    }
    score += 15;
    return {
        atsScore: Math.round(score),
        feedback
    };
};

module.exports = calculateATSScore;