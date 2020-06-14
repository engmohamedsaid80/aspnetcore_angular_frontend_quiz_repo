import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {

  question = {
    QuestionText: "",
    CorrectAnswer: "",
    WrongAnswer1: "",
    WrongAnswer2: "",
    WrongAnswer3: ""
  };

  questions = {};

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getQuestionsFromBE().subscribe(res => {
      this.questions = res
    });
  }

  displayQuestion(question) {
    this.api.selectQuestion(question);
  }
}
