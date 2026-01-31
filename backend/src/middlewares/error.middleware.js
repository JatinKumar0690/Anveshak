const errorHandler = (err,req, res,next) => {
    if(err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json ({
            success: false,
            message: "File too large max file size must be 2 MB"
        });
    }
    if(err.message === "Only PDF files are allowed") {
        return res.status(400).json({
            success: false,
            message: "Invalid file format. Please upload a valid PDF file"
        })
    }
    return res.status(500).json ({
        success: false,
        message: err.message || "Something went wrong"
    })
}
module.exports = errorHandler;