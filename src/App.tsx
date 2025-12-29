import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import GlobalStyle from './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'
import Carrinho from './pages/Carrinho'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Carrinho />
      </BrowserRouter>
    </Provider>
  )
}
