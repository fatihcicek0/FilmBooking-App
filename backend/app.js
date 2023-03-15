const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const multer=require('multer');
const path = require('path');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './img')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname +'-'+Date.now()+ '-' + path.extname(file.originalname))
    }
  })
  
  app.use( multer({ storage: storage }).single('img'));

const userRouter=require('./routes/user');
const filmRouter=require('./routes/film');
app.use('/img', express.static('./img'));
app.use(express.static(path.join(__dirname, 'img')));
app.use(filmRouter);
app.use(userRouter);

app.listen(2000,()=>{
    console.log('listenin on port 2000');
})