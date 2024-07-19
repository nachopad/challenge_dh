const path = require('node:path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/applicantProfile');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

function fileFilter(req, file, cb) {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if(file) {
        allowedFileTypes.includes(file.mimetype) ?  cb(null, true)  : (req.body.error = true , cb(null, false)); 
    };
};

const uploadFile = multer( { storage, fileFilter } );

module.exports = uploadFile;