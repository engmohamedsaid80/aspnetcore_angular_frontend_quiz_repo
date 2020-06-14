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

  getQuestionsFromBE() {
    return this.httpBE.get('http://localhost:61925/api/questions');
  }

  getQuizzesFromBE() {
    return this.httpBE.get('http://localhost:61925/api/quizzes');
  }

  postQuestionToBE(question) {
    this.httpBE.post('http://localhost:61925/api/questions', question).subscribe(beResponse => {
      console.log(beResponse);
    })
  }

  postQuizToBE(quiz) {
    this.httpBE.post('http://localhost:61925/api/quizzes', quiz).subscribe(beResponse => {
      console.log('response from Be: ' + beResponse);
    })
  }

  putQuestionToBE(question) {
    this.httpBE.put('http://localhost:61925/api/questions', question).subscribe(beResponse => {
      console.log(beResponse);
    })
  }
}
