import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import authRouter from './routes/auth';
import filmRouter from './routes/film';
import path from 'path';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname))
    }
})

app.use(multer({ storage: storage }).single('img'));
app.use('/img', express.static('./img'));
app.use(express.static(path.join(__dirname, 'img')));
app.use(authRouter);
app.use(filmRouter);

app.listen(2000, () => {
    console.log("connect");
});

