import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DigitransitService {

  constructor( private http: HttpClient) { }

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  body;

  buses(stop: string) {

    this.body = {query: '{stops(name: "' + stop +'"){name routes {shortName}}}'};

    return this.http.post(this.apiUrl, this.body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
}

/*
{
  stops(name: "herttoniemi"){
    name
    routes {
      shortName
    }
  }
}


https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql -H "Content-Type: application/json" --data "{stops(name: "herttoniemi"){name routes {shortName}}}"

*/
