const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, "")}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (path.extname(file.originalname) !== ".pdf") {
    return cb(new Error("only PDF are allowed"), false);
  }
  cb(null, true);
};

const upload = multer ({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 },
});

module.exports = upload;