import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes = [
  {path: 'history', component: HistoryComponent},
  {path: '**', redirectTo: 'todo-list'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
