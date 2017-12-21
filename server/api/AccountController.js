import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';

export const getEmailAndPassword = (req) => {
  let header   = req.headers['authorization'] || '',        // get the header
      token    = header.split(/\s+/).pop() || '',            // and the encoded auth token
      auth     = new Buffer(token, 'base64').toString(),    // convert from base64
      parts    = auth.split(/:/),                          // split on colon
      email    = parts[0],
      password = parts[1];

  return { email, password };
};

export default function AccountController(app){
  const userService = new UserService();
  const SECRET = process.env.SECRET;
  
  app.get('/api/login', (req, res) => {
    const creds = getEmailAndPassword(req);

    userService.verifyAndGet(creds.email, creds.password).subscribe(u => {
      const token = jwt.sign({ id: u._id }, SECRET);
      res.cookie('sessToken', token, { httpOnly: true });
      res.json({ token: token });
    }, err => {
      res.status(401).json({ error: err.message });
    });
  });

  app.post('/api/register', (req, res) => {
    const user = req.body;

    userService.register(user).subscribe(u => {
      res.json(u);
    }, err => {
      res.status(400).json({ error: err.message });
    });
  });

  app.get('/api/logout', function(req, res) {
    const expDate = new Date();
    expDate.setFullYear(2000);
    
    // force expire cookie
    res.cookie('sessToken', undefined, { expires: expDate, httpOnly: true });
    res.json({ message: 'done!' });
  });
}
