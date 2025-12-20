import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Carrinho from '../pages/Carrinho'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Perfil />} />
        <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
)

export default AppRoutes
