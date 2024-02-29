import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button(props: Props) {
  return <button className={styles.button_wrapper} {...props} />
}
