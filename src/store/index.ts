import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../pages/Carrinho/carrinhoSlice'
import { api } from '../services/api'
import { checkoutApi } from '../services/checkoutApi'

export const store = configureStore({
    reducer: {
        carrinho: carrinhoReducer,
        [api.reducerPath]: api.reducer,
        [checkoutApi.reducerPath]: checkoutApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, checkoutApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
