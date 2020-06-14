import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private httpBE: HttpClient) {}

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  getQuestionsFromBE(quizId) {
    return this.httpBE.get(`http://localhost:61925/api/questions/${quizId}`);
  }

  getQuizzesFromBE() {
    return this.httpBE.get('http://localhost:61925/api/quizzes');
  }

  postQuestionToBE(question) {
    return this.httpBE.post('http://localhost:61925/api/questions', question);
  }

  postQuizToBE(quiz) {
    return this.httpBE.post('http://localhost:61925/api/quizzes', quiz);
  }

  putQuizToBE(quiz) {
    return this.httpBE.put('http://localhost:61925/api/quizzes', quiz);
  }

  putQuestionToBE(question) {
    return this.httpBE.put('http://localhost:61925/api/questions', question);
  }
}
