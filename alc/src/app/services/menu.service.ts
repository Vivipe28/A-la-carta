import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlMenu = environment.ApiMenu

  $modal = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  veganMenu(){
    const path = this.urlMenu + '/recipes/complexSearch?apiKey=12f2c6aec51c45539d8602a7b3f23cdc&query=vegan&number=8';
    return this.http.get(path)
  }

  beefMenu(){
    const path = this.urlMenu + '/recipes/complexSearch?apiKey=12f2c6aec51c45539d8602a7b3f23cdc&query=beef&number=8';
    return this.http.get(path)
  }

  infoDish(id:string){
    const path = this.urlMenu + '/recipes/' + id + '/information?apiKey=12f2c6aec51c45539d8602a7b3f23cdc';
    console.log(path);
    
    return this.http.get(path)
  }
}
