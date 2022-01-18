const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/img/users');
    },
    filename: (req, file, callback) => {
        const imageName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, imageName);
    }
});

module.exports = multer({ storage })