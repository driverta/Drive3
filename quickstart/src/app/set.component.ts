import { Component } from '@angular/core';

@Component({
  selector: 'my-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css'],
})

export class SetComponent {
	exercise = "Bench"
	weight = 100;
	reps = 10;
}