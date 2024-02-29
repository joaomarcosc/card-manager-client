import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import styles from './styles.module.scss'

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; error?: string }

export const Input = forwardRef(function InternInput(
  props: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label className={styles.input_wrapper}>
      <p className={styles.input__label}>{props.label}</p>
      <div className={styles.input__container}>
        <input ref={ref} {...props} />
        <span>{props.error}</span>
      </div>
    </label>
  )
})
