import Rx from 'rxjs';
import BookRepository from '../repositories/BookRepository';
import { ErrInvalidId, ErrValidation } from '../errors';

export default class BookService {

  constructor(){
    this.bookRepo = new BookRepository();
  }

  getBooks(){
    return this.bookRepo.find({});
  }

  getBookById(documentId){
    try {
      documentId = this.bookRepo.asObjectId(documentId);
    } catch(err){
      return Rx.Observable.throw(new ErrInvalidId(`Invalid book id: ${documentId}`));
    }
    
    return this.bookRepo.findById(documentId);
  }

  saveBook(book){
    const errs = this.validateBook(book);
    if(errs.length > 0){
      return Rx.Observable.throw(new ErrValidation(errs.join(', ')));
    }

    return this.bookRepo.save(book);
  }

  validateBook(book){
    const errors = [];

    if(!book.author || book.author === ''){
      errors.push('book author required');
    }

    if(!book.title || book.title === ''){
      errors.push('book title required');
    }

    return errors;
  }
}