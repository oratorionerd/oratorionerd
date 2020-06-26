import { Component, OnInit } from '@angular/core';
import { CovidData } from 'src/app/models/covid_data';
import { ApiService } from 'src/app/services/api/api.service';

const basePath : string = "http://parrocchiasantonio.it:1337";

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})

export class Covid19Component implements OnInit {

  public covidData : CovidData[];

  constructor(private apiService : ApiService) {
    this.covidData = new Array<CovidData>();
  }

  ngOnInit(): void {
    this.apiService.getCovidData().subscribe((resp : any) => {
      for(let data of resp){
        console.log(data);
        let tmp : CovidData = {
          title: data.titolo,
          files: data.files.map(function(file){ return {title: file.name, path: `${basePath}${file.path}`}})
        }
        this.covidData.push(tmp);
      }
    })
  }

}
