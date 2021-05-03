import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-component',
  templateUrl: './cool-component.component.html',
  styleUrls: ['./cool-component.component.scss']
})
export class CoolComponentComponent implements OnInit {

  var1: string = "Hello";

  constructor() { }

  ngOnInit(): void {
  }

}
