
const { uploadImage, changeAvatar, getAvatar } = require('../controllers/profile')

//import only router
const router = require('express').Router()
// const multer  = require('multer')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
// var upload = multer({ storage: storage })


router.post('/update', changeAvatar)
router.post('/avatar', getAvatar)


// router.post('/avatar', upload.single('myFile'), (req, res, next) => {

//     const file = req.file
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//     const avatar = new Avatar({
//       name: "dsadsasad",
//       img: file
//     })
//     const savedAvatar = avatar.save()
//     res.send(file)
    
//   })


module.exports = router