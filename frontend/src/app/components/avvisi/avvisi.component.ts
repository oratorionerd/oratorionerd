import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-avvisi',
  templateUrl: './avvisi.component.html',
  styleUrls: ['./avvisi.component.css']
})
export class AvvisiComponent implements OnInit {

  public avvisi : string[] = [
    "Domani messa alle 9",
    "Veglia Sabato alle 18"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
