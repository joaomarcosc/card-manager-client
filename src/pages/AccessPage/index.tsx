import { AuthCard } from '@components/AuthCard'
import styles from './styles.module.scss'

export function AccessPage() {
  return (
    <div className={styles.access_wrapper}>
      <AuthCard />
    </div>
  )
}
