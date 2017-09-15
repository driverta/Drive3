import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TabsComponent }  from './tabs.component';
import { StatsComponent }  from './stats.component';
import { SetComponent }  from './set.component';
import { HistoryComponent }  from './history.component';
import { StacksComponent }  from './stacks.component';
import { PumpsComponent }  from './pumps.component';
import { ChallengesComponent }  from './challenges.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	TabsComponent,
  	StatsComponent,
  	SetComponent,
  	HistoryComponent,
  	StacksComponent,
  	PumpsComponent,
  	ChallengesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
