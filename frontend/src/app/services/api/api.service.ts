import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Avvisi } from 'src/app/models/avvisi'
import { YoutubeVideo } from 'src/app/models/youtubeVideo';

const apiEndpoint = "http://localhost:3333";
const youtubeEndpoint = "http://parrocchiasantonio.it:3006/getLatestVideo";

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

  private avvisi : Avvisi[] = [
    {
      id: 1,
      titolo : 'Avviso 1',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/3/2020").toString()
    },
    {
      id: 2,
      titolo : 'Avviso 2',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/4/2020").toString()
    },
    {
      id: 3,
      titolo : 'Avviso 3',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/5/2020").toString()
    },
    {
      id: 4,
      titolo : 'Avviso 4',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/6/2020").toString()
    },
    {
      id: 5,
      titolo : 'Avviso 5',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/7/2020").toString()
    },
    {
      id: 6,
      titolo : 'Avviso 6',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("6/8/2020").toString()
    },
    {
      id: 7,
      titolo : 'Avviso 7',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("06/9/2020").toString()
    },
    {
      id: 8,
      titolo : 'Avviso 8',
      contenuto : 'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.',
      data: new Date("06/10/2020").toString()
    }
  ]

  constructor(private http : HttpClient) { }

  getAvvisi() : Observable<Avvisi[]> {
    return of(this.avvisi);
  }

  public registerUser(mail : string, password : string, role : boolean) : Observable<number>{
    return this.http.post<number>(`${apiEndpoint}/users`, {'mail' : mail, 'pwd' : password, 'role' : role}, httpOptions)
    
  }

  public login(mail : string, password : string) : Observable<any>{
    return this.http.post<any>(`${apiEndpoint}/users/login`, {'mail' : mail, 'pwd' : password}, httpOptions)
  }

  public getLatestVideo() : Observable<YoutubeVideo> {
    return this.http.get<YoutubeVideo>(youtubeEndpoint);
  }
}
