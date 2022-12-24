import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BoockComponent } from './pages/boock/boock.component';
import { ExitComponent } from './pages/exit/exit.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalsComponent } from './pages/journals/journals.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'boock',
    component: BoockComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'journals',
    component: JournalsComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'exit',
    component: ExitComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
