import { combineReducers } from '@reduxjs/toolkit'
import carrinhoReducer from '../pages/Carrinho/carrinhoSlice'
import uiReducer from './uiSlice'
import { api } from '../services/api'

export const rootReducer = combineReducers({
    carrinho: carrinhoReducer,
    ui: uiReducer,
    [api.reducerPath]: api.reducer
})

export type RootReducer = ReturnType<typeof rootReducer>
