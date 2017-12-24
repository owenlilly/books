import BookService from "../services/BookService";
import { ErrInvalidId, ErrValidation, ErrorResponse } from "../errors";


export default function BookController(app){
  const bookService = new BookService();

  // get list of existing books
  app.get('/api/book', (req, res) => {

    bookService.getBooks().subscribe(books => {
      res.json(books);
    }, err => {
      res.status(500).json(new ErrorResponse(err));
    });
  });

  // get a specific book by document id
  app.get('/api/book/:id', (req, res) => {
    let id = req.params.id;
    
    bookService.getBookById(id).subscribe(book => {
      if(!book){
        res.status(400).json({error: 'Book not found for id: '+id});
      } else {
        res.json(book);
      }
    }, err => {
      let status = 500;
      if(err instanceof ErrInvalidId){
        status = 400;
      }
      res.status(status).json(new ErrorResponse(err));
    });
  });

  // save a new book
  app.post('/api/book', (req, res) => {
    if(!req.user){
      res.status(401).json(new ErrorResponse('Login required'));
      return;
    }

    const book = req.body;
    bookService.saveBook(book).subscribe(b => {
      res.json(b);
    }, err => {
      // error handler
      let status = 500;
      if(err instanceof ErrValidation){
        status = 400;
      }
      
      res.status(status).json(new ErrorResponse(err));
    });
  });
}