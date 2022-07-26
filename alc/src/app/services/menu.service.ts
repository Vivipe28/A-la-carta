import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlMenu = environment.ApiMenu

  $modal = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  veganMenu(){
    const path = this.urlMenu + '/recipes/complexSearch?apiKey=82df6de3d38145b994a873d7bb450a24&query=vegetarian';
    return this.http.get(path)
  }

  infoDish(id:string){
    const path = this.urlMenu + '/recipes/' + id + '/information?apiKey=82df6de3d38145b994a873d7bb450a24';
    console.log(path);
    
    return this.http.get(path)
  }
}
