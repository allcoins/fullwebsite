import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INoticias } from './noticias';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }




    postFile(fileToUpload: File): Observable<any> {
        const endpoint = 'https://juliochilela.info/igrejas/api/upload.php';
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http
          .post(endpoint, formData, {})
          .map(() => { return true; });
    }

    HandleError(va: any){
    
    console.log("error" + va);
    }


}
