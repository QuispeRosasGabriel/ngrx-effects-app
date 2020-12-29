import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuario, cargarUsuarioExito, cargarUsuarioError } from '../actions';

@Injectable()
export class UsuarioEffects {
    public constructor (
        private readonly actions$: Actions,
        private readonly usuarioService: UsuarioService
    ) {}

    public cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action?.id)
                .pipe(
                    tap((info)=> console.log(info)),
                    map((usuario) => cargarUsuarioExito({usuario})),
                    catchError((err) => of( cargarUsuarioError({payload: err})))
                )
            )
        )
    );
}