import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    constructor( ) { }

  ngOnInit() {

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('sticky');
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('sticky');
  }

}
