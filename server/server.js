var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');

app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'image_uploads')
  },
  filename: function (req, file, cb) {
    cb(null, "upload_" + file.originalname)
  }
});

var upload = multer({ storage: storage }).single('file');

app.post('/',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});

app.listen(8080, () => console.log('Listening on port 8080...'));