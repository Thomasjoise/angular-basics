import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 message='This is a data binding method';
 box(){
  return 'this is a box ';
 }
}
