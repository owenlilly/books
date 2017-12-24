import mongoose, { Schema } from 'mongoose';
import BaseRepository from './BaseRepository';

const bookSchema = new Schema({
  title: String,
  author: String,
  count: Number,
  year: Date,
  stillIssued: Boolean
}, { timestamps: {} });

export const BookModel = mongoose.model('Book', bookSchema);

export default class BookRepository extends BaseRepository {
  constructor(){
    super(BookModel);
  }
}