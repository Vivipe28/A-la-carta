import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private urlMenu = environment.ApiMenu

  constructor(private http: HttpClient) { }

  veganMenu(){
    const path = this.urlMenu + '/food/menuItems/search?apiKey=fc546899c06a4e668ca6ddfd86e5bb41&query=vegan';
    return this.http.get(path)
  }
}
