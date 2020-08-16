import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('navbutton').style.width = '250px';
    document.getElementById('wrapper').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }
}
