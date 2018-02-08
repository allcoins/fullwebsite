import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})


export class NoticiasComponent implements OnInit {

  public noticias: any[];
  public baseUrl: string = "https://juliochilela.info/igrejas/api/";
  constructor(private _noticiasService: NoticiasService ) {}

  ngOnInit() {
  
    this._noticiasService.getNoticias()
        .subscribe((data) => {
            this.noticias = data.dados;
        });
  
  }

}
