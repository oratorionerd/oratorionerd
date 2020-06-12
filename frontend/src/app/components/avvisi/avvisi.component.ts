import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import {EventEmitter } from '@angular/core';
import { Avvisi } from 'src/app/models/avvisi';


@Component({
  selector: 'component-avvisi',
  templateUrl: './avvisi.component.html',
  styleUrls: ['./avvisi.component.css']
})


export class AvvisiComponent implements OnInit {

  @Input() maxAvvisi : number;
  
  public avvisi : Avvisi[];
  constructor(private apiService : ApiService) {

  }

  private convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }

  private sortDateDesc(a : Avvisi, b : Avvisi) {
    let aa = a.data.split('/').reverse().join();
    let bb = b.data.split('/').reverse().join();
    return aa > bb ? -1 : (aa < bb ? 1 : 0);
  } 

  ngOnInit(): void {
    this.apiService.getAvvisi().subscribe(avvisi => {
      this.avvisi = avvisi;
      this.avvisi.forEach(avviso => avviso.data = this.convertDate(avviso.data))
      this.avvisi.sort(this.sortDateDesc)
      if(!this.maxAvvisi)
        this.maxAvvisi = avvisi.length;
    })
  }




}
