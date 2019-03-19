import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryComponent } from './history/history.component';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HistoryListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
