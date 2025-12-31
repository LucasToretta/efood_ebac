import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../Types/efood'

type CarrinhoItem = Produto & { quantidade: number }

type CarrinhoState = {
    itens: CarrinhoItem[]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    itens: [],
    isOpen: false
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        abrir: (state) => {
            state.isOpen = true
        },
        fechar: (state) => {
            state.isOpen = false
        },
        adicionar: (state, action: PayloadAction<Produto>) => {
            const item = state.itens.find((i) => i.id === action.payload.id)
            if (item) item.quantidade += 1
            else state.itens.push({ ...action.payload, quantidade: 1 })
        },
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((i) => i.id !== action.payload)
        },
        limpar: (state) => {
            state.itens = []
        }
    }
})

export const { abrir, fechar, adicionar, remover, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
