import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as eiddoURLs from '../../../assets/mockjson/eiddourls.json';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EiddoConfigService {

  constructor(private httpClient: HttpClient) { }

  public retrieveURLs(eiddoRequest){
    const body = JSON.stringify(eiddoRequest);
    if(environment.mock === true){
        return of((eiddoURLs as any).default);      
    } else {
      return this.httpClient
        .post(environment.eiddoConfigAPIUrl, body.toString(),{
          headers: new HttpHeaders({
            'content-type': 'application/json'
          })
        }).pipe(map((data:any) => data));        
    }
  }
}
