import { useAuthStore } from '@atoms/authStore'
import { Button } from '@components/Button'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { CreateCard } from './CreateCard'
import styles from './styles.module.scss'
import { Modal } from '@components/Modal'

export function LoginOnly() {
  const auth = useAuthStore()
  const [open, setOpen] = useState(false)

  if (!auth.isLoggedIn) {
    return <Navigate to={'/login'} />
  }

  return (
    <div style={{ position: 'relative' }}>
      <header className={styles.header}>
        <Button size="sm" color="success" onClick={() => setOpen(true)}>
          Criar card
        </Button>
        <Button size="sm" onClick={() => auth.logout()}>
          Sair
        </Button>
      </header>

      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateCard setOpen={setOpen} />
      </Modal>

      <Outlet />
    </div>
  )
}
