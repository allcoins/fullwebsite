import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FileUploadService } from '../file-upload.service';




@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.scss']
})

export class PublicarComponent implements OnInit {
    private _url = "https://juliochilela.info/igrejas/api/publicarNoticia.php";
    fileToUpload: File = null;
    public _msg: string = '';
    cleanTitulo: string = '';
    cleanDescricao: string ='';
  constructor(private http: HttpClient, private fileUploadService: FileUploadService) { }
  
  titulo : string;
  descricao: string;
  
  ngOnInit() {
  }
  
  
  
  
  titleKeyUp(event: any){
  
    this.titulo = event.target.value;
  
  }
  
  descricaoKeyUp(event: any){
  
    this.descricao = event.target.value;
  
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    
    console.log(this.fileToUpload);
}

uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  
  publicarNoticia(event: any){
  
   this.http.post(this._url,{titulo: this.titulo, descricao: this.descricao}).subscribe((data:any) => {
   
               console.log(data);
               
                this._msg = "Inserido com sucesso";
                this.cleanTitulo= null;
                this.cleanDescricao = null;
               
               })
   
  }

}
