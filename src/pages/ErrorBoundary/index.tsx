import { Button } from '@components/Button'
import styles from './styles.module.scss'
import { useRouteError } from 'react-router-dom'

export function ErrorBoundary() {
  const error = useRouteError() as { message: string; stack: string }

  return (
    <div className={styles.container}>
      <h1>500</h1>
      <h2>Aconteceu um erro :/</h2>

      <code>{error.message}</code>
      <Button
        onClick={() => {
          window.location.reload()
        }}
        color="error"
      >
        Tentar novamente
      </Button>
    </div>
  )
}
