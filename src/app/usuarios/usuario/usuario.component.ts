import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public constructor(private readonly router: ActivatedRoute,
                     private  store: Store<AppState>) { }

  public ngOnInit(): void {
    this.getDataFromStore();
    this.getInfoFromUrl();
  }

  private getInfoFromUrl() {
    this.router.params.subscribe(({id}) => this.store.dispatch(cargarUsuario(id)));
  }

  private getDataFromStore() {
    this.store.select('usuario').subscribe(({user}) =>  this.usuario = user)
  }
}
