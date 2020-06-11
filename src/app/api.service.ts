import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();


  constructor(private httpBE: HttpClient) {}

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }
  getQuestionsFromBE() {
    return this.httpBE.get('http://localhost:61925/api/questions');
  }

  postQuestionToBE(question) {
    this.httpBE.post('http://localhost:61925/api/questions', question).subscribe(beResponse => {
      console.log(beResponse);
    })
  }

  putQuestionToBE(question) {
    this.httpBE.put('http://localhost:61925/api/questions', question).subscribe(beResponse => {
      console.log(beResponse);
    })
  }
}
