import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UiState = {
    carrinhoAberto: boolean
}

const initialState: UiState = {
    carrinhoAberto: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        abrirCarrinho: (state) => {
            state.carrinhoAberto = true
        },
        fecharCarrinho: (state) => {
            state.carrinhoAberto = false
        },
        setCarrinhoAberto: (state, action: PayloadAction<boolean>) => {
            state.carrinhoAberto = action.payload
        }
    }
})

export const { abrirCarrinho, fecharCarrinho, setCarrinhoAberto } = uiSlice.actions
export default uiSlice.reducer
