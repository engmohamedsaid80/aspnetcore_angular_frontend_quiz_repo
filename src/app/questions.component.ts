import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestionsFromBE(quizId).subscribe(res => {
      this.questions = res
    });
  }

  displayQuestion(question) {
    this.api.selectQuestion(question);
  }
}
