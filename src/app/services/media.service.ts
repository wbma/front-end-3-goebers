import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient) { }

  i: any;
  tmp;

  getAllMedia() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media/');
  }

}
