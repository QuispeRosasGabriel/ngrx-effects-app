import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public constructor(private readonly router: ActivatedRoute,
                     private readonly store: Store) { }

  public ngOnInit(): void {
    this.router.params.subscribe(({id}) => this.store.dispatch(cargarUsuario(id)));
  }

}
