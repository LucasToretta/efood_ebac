import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CarrinhoItem = {
    id: number
    nome: string
    foto: string
    preco: number
    quantidade: number
}

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
        adicionar: (state, action: PayloadAction<CarrinhoItem>) => {
            const item = action.payload
            const itemExistente = state.itens.find((i) => i.id === item.id)

            if (itemExistente) {
                itemExistente.quantidade += 1
            } else {
                state.itens.push({ ...item, quantidade: 1 })
            }

            state.isOpen = true
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
