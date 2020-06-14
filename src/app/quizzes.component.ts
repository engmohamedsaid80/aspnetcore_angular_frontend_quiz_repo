import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

  quiz = {
    id: "",
    title: ""
  };

  quizzes;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getQuizzesFromBE().subscribe(res => {
      this.quizzes = res
    });
  }

  displayQuiz(quiz) {
    this.api.selectQuiz(quiz);
  }
}
