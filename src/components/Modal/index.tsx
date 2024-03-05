import { ReactNode } from 'react'
import { Modal as ResponsiveModal } from 'react-responsive-modal'
import { IoCloseOutline } from 'react-icons/io5'
import styles from './styles.module.scss'

interface IModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal(props: IModalProps) {
  const { children, ...rest } = props
  return (
    <ResponsiveModal
      classNames={{
        modal: styles.modal,
        overlay: styles.overlay,
      }}
      center
      {...rest}
      closeIcon={<IoCloseOutline size={24} className={styles.close_icon} />}
    >
      {children}
    </ResponsiveModal>
  )
}
