import { Suspense } from 'react'
import styles from './styles.module.scss'
import { Outlet } from 'react-router-dom'

export default function Container() {
  return (
    <div className={styles.container_wrapper} style={{ position: 'relative' }}>
      {/* Todo: Adicionar fallback */}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
