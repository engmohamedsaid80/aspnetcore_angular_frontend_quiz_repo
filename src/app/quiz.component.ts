import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './api.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {

  quiz = {};

  constructor(public api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

  postQuiz(quiz) {
    this.api.postQuizToBE(quiz).subscribe(res => {
      if (res) {

        this.snackBar.open("Quiz posted", "", {
          duration: 2000,
        });

        this.quiz = {};
      }

    });
  }

  putQuiz(quiz) {
    this.api.putQuizToBE(quiz).subscribe(res => {
      if (res) {

        this.snackBar.open("Quiz saved", "", {
          duration: 2000,
        });

        this.quiz = {};
      }

    });
  }

  clearQuiz() {
    this.quiz = {};
  }
}
