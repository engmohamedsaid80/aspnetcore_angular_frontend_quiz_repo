import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'play',
  templateUrl: './play.component.html'
})
export class PlayComponent {

  quizzes;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAllQuizzesFromBE().subscribe(res => {
      this.quizzes = res
    });
  }
}
