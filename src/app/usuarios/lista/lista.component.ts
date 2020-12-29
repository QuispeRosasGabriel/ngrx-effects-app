import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  public usuarios: Array<Usuario>;
  public constructor(private readonly store: Store<AppState>) { }

  public ngOnInit(): void {
    this.getUsersFromStore();
  }

  private getUsersFromStore(): void {
    this.store.select('usuarios').subscribe(({users}) => this.usuarios = users)
    this.store.dispatch(cargarUsuario())
  }

}
