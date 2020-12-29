import { createReducer, on } from '@ngrx/store'
import { Usuario } from '../../models';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioExito } from "../actions";

export interface UsuariosState {
    users: Array<Usuario>,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,
    on(cargarUsuario, state => ({ ...state, loading: true })),
    on(cargarUsuarioExito, (state, { usuarios }) => ({ ...state, loading: false, loaded: true, users: [...usuarios] })),
    on(cargarUsuarioError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: payload })),
 );

export const usuariosReducer = (state, action) => _usuariosReducer(state, action);
