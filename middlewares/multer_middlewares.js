const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const folder = path.join(__dirname, '../public/img')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        const imageName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, imageName);
    }
});

module.exports = multer({ storage })