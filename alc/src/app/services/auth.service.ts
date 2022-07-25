import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private urlAuth = environment.urlApi

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post(this.urlAuth, { email: email, password: password })
            .pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }
                ))
    }

    errorHandler(error: HttpErrorResponse): Observable<never> {
        if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
            }
            else {
                if (error.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡Usuario o contraseña incorrecta!',
                    })
                }
            }
        }
        return throwError(() => error)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    public get loginStatus(): boolean {
        return (localStorage.getItem('token') !== null);
    }

    logout() {
        localStorage.removeItem('token');
    }

}