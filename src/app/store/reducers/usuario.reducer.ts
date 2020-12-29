import { createReducer, on } from '@ngrx/store'
import { Usuario } from '../../models';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioExito } from "../actions";

export interface UsuarioState {
    id: string
    user: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
    id: 'null',
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,
    on(cargarUsuario, (state, {id}) => ({ ...state, loading: true, id })),
    on(cargarUsuarioExito, (state, { usuario }) => ({ ...state, loading: false, loaded: true, user: {...usuario} })),
    on(cargarUsuarioError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: payload })),
 );

export const usuarioReducer = (state, action) => _usuarioReducer(state, action);
