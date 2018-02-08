import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { INoticias } from './noticias';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NoticiasService {

  public _url: string = "https://juliochilela.info/igrejas/api/getNoticias.php";
  
  
  constructor(private http: HttpClient) { }
  
    getNoticias(): Observable<any>{
        return this.http.get<any>(this._url);
  
  
  }
  

}
