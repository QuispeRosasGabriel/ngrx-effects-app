import { createAction, props } from "@ngrx/store";
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuarioExito = createAction(
    '[Usuarios] Cargar Usuarios Exito',
    props<{ usuarios: Array<Usuario> }>()
);
export const cargarUsuarioError = createAction(
    '[Usuarios] Cargar Usuarios Exito',
    props<{ payload: any }>()
);