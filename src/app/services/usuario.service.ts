import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REQRESBASE } from '../shared/global';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public constructor(private readonly http: HttpClient) { }

  public getUsers() {
    return this.http.get(`${REQRESBASE}/users?per_page=6`)
          .pipe(
            map((resp) =>  resp['data'])
          );
  }

  public getUserById(id) {
    return this.http.get(`${REQRESBASE}/users/${id}`)
          .pipe(
            map((resp) =>  resp['data'])
          );
  }
}
