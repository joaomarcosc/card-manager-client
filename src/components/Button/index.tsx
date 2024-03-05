import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { LoadingDots } from '@components/LoadingDots'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  color?: 'warning' | 'success' | 'error'
  loading?: boolean
}

export function Button(props: Props) {
  const {
    size = 'lg',
    variant = 'contained',
    color = '',
    loading,
    children,
    ...rest
  } = props

  return (
    <button
      className={classNames(
        styles.button_wrapper,
        styles[size],
        styles[variant],
        styles[color],
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  )
}
