import { Suspense } from 'react'
import styles from './styles.module.scss'
import { Outlet } from 'react-router-dom'
import { Switch } from '@components/Switch'
import { useThemeStore } from '@atoms/themeStore'

export default function Container() {
  const theme = useThemeStore()

  return (
    <div className={styles.container_wrapper} style={{ position: 'relative' }}>
      {/* Todo: Adicionar fallback */}
      <div className={styles.theme_button}>
        <Switch
          checked={Boolean(theme.darkMode)}
          onChange={() => theme.setDarkMode(!theme.darkMode)}
        />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
