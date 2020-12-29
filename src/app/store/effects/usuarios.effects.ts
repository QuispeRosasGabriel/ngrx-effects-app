import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuario } from '../actions';

@Injectable()
export class UsuariosEffects {
    public constructor (
        private readonly actions$: Actions,
        private readonly usuarioService: UsuarioService
    ) {}

    public cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            tap(data => console.log('effect tap', data)),
            mergeMap(
                () => this.usuarioService.getUsers()
                .pipe(
                    tap((data) => console.log('desde el effect abajo', data))
                )
            )
        )
    );
}