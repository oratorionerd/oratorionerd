import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Avvisi } from 'src/app/models/avvisi'
import { YoutubeVideo } from 'src/app/models/youtubeVideo';

const strapiEndpoint = "http://parrocchiasantonio.it:1337";
const avvisiPath = "avvisis"
const youtubeEndpoint = "http://parrocchiasantonio.it:3006/getLatestVideo";
const covidEndpoint = "http://parrocchiasantonio.it:1337/modulis";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const httpOptionsPlainText = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getAvvisi() : Observable<any[]> {
    return this.http.get<any[]>(`${strapiEndpoint}/${avvisiPath}`);
  }

  public registerUser(mail : string, password : string, role : boolean) : Observable<number>{
    return this.http.post<number>(`${strapiEndpoint}/users`, {'mail' : mail, 'pwd' : password, 'role' : role}, httpOptions)
    
  }

  public login(mail : string, password : string) : Observable<any>{
    return this.http.post<any>(`${strapiEndpoint}/users/login`, {'mail' : mail, 'pwd' : password}, httpOptions)
  }

  public getLatestVideo() : Observable<YoutubeVideo> {
    return this.http.get<YoutubeVideo>(youtubeEndpoint);
  }

  public getCovidData() : Observable<any> {
    return this.http.get<any>(covidEndpoint);
  }
}
