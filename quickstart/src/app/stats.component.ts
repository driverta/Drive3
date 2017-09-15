import { Component } from '@angular/core';

@Component({
  selector: 'my-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})

export class StatsComponent {
	exercise = "Bench";
	sgains = 1000;
	xgains = 2000;
	srecords = 10;
	xrecords = 20;
	schallenges = 1;
	xchallenges = 2;
	ssets = 20;
	xsets = 40;
	sreps = 200;
	xreps = 400;
	sweight = 500;
	xweight = 1000;
	soneRM = 225;
	xoneRM = 1000;
}