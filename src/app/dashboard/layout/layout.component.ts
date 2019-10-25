import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <h1>Dashboard Layout</h1>
    <p>
      <a routerLink = "/dashboard/home">Home</a>
      <a routerLink = "/dashboard/admin">Admin</a>
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
