
const multer = require("multer")
const path = require("path")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/bookImage"), function (error, sucess) {
            if (error) throw error
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name, function (err, suceess1) {
            if (err) throw err
        })
    }

})
module.exports.upload = multer({ storage: storage })