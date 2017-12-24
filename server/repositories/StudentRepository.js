import mongoose, { Schema } from 'mongoose';
import BaseRepository from './BaseRepository';

const studentSchema = new Schema({
  firstname: String,
  lastname: String,
  studentId: String,
  class: String
}, { timestamps: {} });

export const StudentModel = mongoose.model('Student', studentSchema);

export default class StudentsRepository extends BaseRepository {
  constructor(){
    super(StudentModel);
  }
}