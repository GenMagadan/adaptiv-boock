import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { BoockComponent } from './pages/boock/boock.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { JournalsComponent } from './pages/journals/journals.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ExitComponent } from './pages/exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoockComponent,
    AuthorsComponent,
    JournalsComponent,
    ArticlesComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
