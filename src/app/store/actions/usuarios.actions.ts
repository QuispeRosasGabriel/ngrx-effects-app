import { createAction, props } from "@ngrx/store";
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosExito = createAction(
    '[Usuarios] Cargar Usuarios Exito',
    props<{ usuarios: Array<Usuario> }>()
);
export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Exito',
    props<{ payload: any }>()
);