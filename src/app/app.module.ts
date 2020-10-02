import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndexComponent } from './index/index.component';
import { LogComponent } from './log/log.component';
import { RouterModule } from '@angular/router';
import { LoggerService } from './logger.service';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: IndexComponent},
      {path:'log', component: LogComponent},
      {path:'tasks', component: TasksComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, LogComponent, TasksComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoggerService, TimerService, TasksService]
})
export class AppModule { }
