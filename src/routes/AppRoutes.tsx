import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Carrinho from '../pages/Carrinho'
import Checkout from '../pages/checkout'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurante/:id" element={<Perfil />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/entrega" element={<Checkout />} />
        </Routes>
    )
}
