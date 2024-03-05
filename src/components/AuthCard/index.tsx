import styles from './styles.module.scss'
import { IoRocketOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginForm'

export function AuthCard() {
  const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

  const buttonChangeTypeText = {
    register: {
      title: 'Crie sua conta',
      btn: (
        <>
          Ja possui uma conta?
          <span>Acesse agora</span>
        </>
      ),
    },
    login: {
      title: 'Acesse sua conta',
      btn: (
        <>
          Nao tem uma conta?
          <span>Se inscreva gratuitamente</span>
        </>
      ),
    },
  }

  return (
    <div className={styles.authCard_wrapper}>
      <p className={styles.authCard__title}>
        {buttonChangeTypeText[typeForm].title}
      </p>

      {typeForm === 'register' && <RegisterForm />}
      {typeForm === 'login' && <LoginForm />}

      <div className={styles.authCard__divider} />

      <button
        onClick={() => {
          setTypeForm((oldState) =>
            oldState === 'login' ? 'register' : 'login',
          )
        }}
        className={styles.authCard__type_button}
      >
        <IoRocketOutline />

        <div className={styles.authCard__type_button__text}>
          {buttonChangeTypeText[typeForm].btn}
        </div>

        <IoIosArrowForward />
      </button>
    </div>
  )
}
