import styles from './styles.module.scss'

export function LoadingDots() {
  return (
    <div className={styles.dot_flashing_wrapper}>
      <div className={styles.dot_flashing} />
    </div>
  )
}
