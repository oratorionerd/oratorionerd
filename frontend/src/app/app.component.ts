import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private router : Router) {

  }
  ngOnInit(): void {
    this.router.events
    .subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toolbarTitle = this.router.url.split('/')[1].toUpperCase();
      }
    });
  }
  toolbarTitle = 'Parrocchia di Sant\'Antonio';
}
