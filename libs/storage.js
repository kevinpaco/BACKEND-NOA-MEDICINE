const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./storage/img_servicios")
    },
    filename:function(req,file,cb){
        cb(null,`${file.fieldname}_${Date.now()}.png`)
    }
})

const upload = multer({storage:storage});

module.exports = upload;