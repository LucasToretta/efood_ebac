import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}
