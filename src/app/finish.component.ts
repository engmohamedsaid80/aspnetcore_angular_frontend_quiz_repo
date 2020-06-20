import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './finish.component.html'
})
export class FinishComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data) { }
}
