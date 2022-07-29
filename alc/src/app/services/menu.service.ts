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
    const path = this.urlMenu + '/recipes/complexSearch?apiKey=526ff739c19f430a965e6862805f6c2a&query=vegan';
    return this.http.get(path)
  }

  beefMenu(){
    const path = this.urlMenu + '/recipes/complexSearch?apiKey=526ff739c19f430a965e6862805f6c2a&query=beef';
    return this.http.get(path)
  }

  infoDish(id:string){
    const path = this.urlMenu + '/recipes/' + id + '/information?apiKey=526ff739c19f430a965e6862805f6c2a';
    console.log(path);
    
    return this.http.get(path)
  }
}
