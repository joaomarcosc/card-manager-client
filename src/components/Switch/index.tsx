import { InputHTMLAttributes } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styles from './styles.module.scss'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function Switch(props: Props) {
  return (
    <div>
      <label className={styles.checkbox_label}>
        <input className={styles.checkbox} type="checkbox" {...props} />
        <span className={styles.ball} />
        <IoMoon />
        <IoSunny />
      </label>
    </div>
  )
}
