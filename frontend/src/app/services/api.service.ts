import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Avvisi } from '../models/avvisi';

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

  constructor() { }

  getAvvisi() : Observable<Avvisi[]> {
    return of(this.avvisi);
  }
}
