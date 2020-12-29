import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioExito } from '../actions';

@Injectable()
export class UsuariosEffects {
    public constructor (
        private readonly actions$: Actions,
        private readonly usuarioService: UsuarioService
    ) {}

    public cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(
                () => this.usuarioService.getUsers()
                .pipe(
                    map((usuarios) => cargarUsuarioExito({usuarios})),
                    catchError((err) => of( cargarUsuarioError({payload: err})))
                )
            )
        )
    );
}