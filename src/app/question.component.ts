import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  question = {};

  quizId;

  constructor(private api: ApiService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(q => this.question = q);
  }

  postQuestion(question) {
    question.quizId = this.quizId;
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
    this.api.putQuestionToBE(question).subscribe(res => {
      if (res) {

        this.snackBar.open("Question saved", "", {
          duration: 2000,
        });

        this.question = {};
      }

    });
  }

  clearQuestion() {
    this.question = {};
  }
}
