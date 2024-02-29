import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Container(props: Props) {
  return <div {...props} className={styles.container_wrapper} />
}
