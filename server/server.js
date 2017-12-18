require('dotenv').config();
import path from 'path';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();

const PORT = process.env.PORT || 3500;
const staticPath = path.join(__dirname, '..', 'public');

app.use(morgan(':method :url :status - :response-time ms'));
app.use(express.static(staticPath));

app.set('view engine', 'pug');
app.set('views', './server/views');

app.get('/', (req, res) => {
  res.render('home/index', { pageTitle: 'Home' });
});

app.listen(PORT, () => console.log('listening on port', PORT));