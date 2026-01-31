const express = require("express");
const upload = require("../middlewares/upload.middleware.js");
const {protect} = require("../middlewares/auth.middleware.js");
const {uploadResume} = require("../controllers/resume.controller.js");

const router = express.Router();


router.post(
    "/upload",
    protect,
    upload.single("resume"),
    uploadResume
)

module.exports = router;