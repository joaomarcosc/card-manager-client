import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  color?: 'warning' | 'success' | 'error'
}

export function Button(props: Props) {
  const { size = 'lg', variant = 'contained', color = '' } = props

  return (
    <button
      className={classNames(
        styles.button_wrapper,
        styles[size],
        styles[variant],
        styles[color],
      )}
      {...props}
    />
  )
}
