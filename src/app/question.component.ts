import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './api.service';


@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {
    QuestionText: "",
    CorrectAnswer: "",
    WrongAnswer1: "",
    WrongAnswer2: "",
    WrongAnswer3: ""
  };

  constructor(private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.api.questionSelected.subscribe(q => this.question = q);
  }

  postQuestion(question) {
    this.api.postQuestionToBE(question).subscribe(res => {
      if (res) {

        this.snackBar.open("Question posted", "", {
          duration: 2000,
        });

        this.question = {};
      }

    });
  }

  putQuestion(question) {
    this.api.putQuestionToBE(question);
  }

  clearQuestion() {
    this.question = {};
  }
}
