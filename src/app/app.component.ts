import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project_boock';

  public isSidenavOpened: boolean = true;

  constructor(
    private matIconRegistry: MatIconRegistry
  ) { }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-rounded')
  }
  public toggleSidenav() {
    this.isSidenavOpened = false;
  }

  public clouseSidenav() {
    this.isSidenavOpened = true;
  }
  public linkBoocks: number = 5;
  public linkAuthors: number = 6;
  public linkJournals: number = 7;
  public linkArticles: number = 8;


}
