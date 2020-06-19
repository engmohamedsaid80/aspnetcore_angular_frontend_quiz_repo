import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {

  quizId;
  questions;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestionsFromBE(this.quizId).subscribe(res => {

      this.questions = res;

      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.wrongAnswer1, q.wrongAnswer2, q.wrongAnswer3];
        shuffle(q.answers);
      });

    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  finish() {

  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
