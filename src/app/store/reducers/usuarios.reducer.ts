import { createReducer, on } from '@ngrx/store'
import { Usuario } from '../../models';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosExito } from "../actions";

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
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosExito, (state, { usuarios }) => ({ ...state, loading: false, loaded: true, users: [...usuarios] })),
    on(cargarUsuariosError, (state, {payload}) => ({ ...state, loading: false, loaded: false, error: payload })),
 );

export const usuariosReducer = (state, action) => _usuariosReducer(state, action);
