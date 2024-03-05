import Container from '@components/Container'
import { LoginOnly } from '@components/LoginOnly'
import { LogoutOnly } from '@components/LogoutOnly'
import { AccessPage } from '@pages/AccessPage'
import { Home } from '@pages/Home'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Container />}>
      {/* Non-Authenticate Routes */}
      <Route element={<LogoutOnly />}>
        <Route path="/login" element={<AccessPage />} />
      </Route>

      {/* 
        Todo: Adicionar rota not found 
        Todo: Adicionar fallback no elemento pai
      */}

      {/* Authenticate Routes */}
      <Route element={<LoginOnly />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>,
  ),
)
