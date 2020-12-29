import { createAction, props } from "@ngrx/store";
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usuario] Cargar Usuario',
    props<{ id: string }>()
);
export const cargarUsuarioExito = createAction(
    '[Usuario] Cargar Usuario Exito',
    props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
    '[Usuario] Cargar Usuario Exito',
    props<{ payload: any }>()
);