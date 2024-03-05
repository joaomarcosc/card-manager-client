import Container from '@components/Container'
import { LoginOnly } from '@components/LoginOnly'
import { LogoutOnly } from '@components/LogoutOnly'
import { AccessPage } from '@pages/AccessPage'
import { ErrorBoundary } from '@pages/ErrorBoundary'
import { Home } from '@pages/Home'
import NotFoundPage from '@pages/NotFoundPage'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Container />} errorElement={<ErrorBoundary />}>
      {/* Non-Authenticate Routes */}
      <Route element={<LogoutOnly />}>
        <Route path="/login" element={<AccessPage />} />
      </Route>

      {/* Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />

      {/* Authenticate Routes */}
      <Route element={<LoginOnly />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>,
  ),
)
