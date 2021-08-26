import {
  ChangeEventHandler,
  FormEventHandler,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
  useCallback,
  useContext
} from 'react'
import requests from '../libs/requests'
import { AuthContext } from './useAuth'
import { useRouter } from 'next/router'

interface LoginFormState {
  email: string
  password: string
  errMsg: string
}

type InitState = LoginFormState

type FieldChangeHandler = ChangeEventHandler<HTMLInputElement>

interface HandleLoginFormSubmit {
  (event: SyntheticEvent): void
}

interface UseLoginFormReturn {
  loginFormState: LoginFormState
  setLoginFormState: Dispatch<SetStateAction<LoginFormState>>
  handleEmailChange: FieldChangeHandler
  handlePasswordChange: FieldChangeHandler
  handleLoginFormSubmit: FormEventHandler<HTMLFormElement>
}

interface UseLoginForm {
  (initState: InitState): UseLoginFormReturn
}

const useLoginForm: UseLoginForm = (initState) => {
  const [
    loginFormState,
    setLoginFormState
  ] = useState<LoginFormState>(initState)

  const authManager = useContext(AuthContext)

  const router = useRouter()

  const handleEmailChange: FieldChangeHandler = useCallback((event) => {
    const email = event.target.value
    setLoginFormState({ ...loginFormState, email })
  }, [loginFormState])

  const handlePasswordChange: FieldChangeHandler = useCallback((event) => {
    const password = event.target.value
    setLoginFormState({ ...loginFormState, password })
  }, [loginFormState])

  const handleLoginFormSubmit: HandleLoginFormSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const { email, password } = loginFormState

      if (email && password) {
        requests.admin
          .login(loginFormState)
          .then((data) => {
            // Persist data post reloads
            localStorage.setItem('ws-user', JSON.stringify(data))
            return data
          })
          .then((data) => authManager?.setUser(data))
          .then(() => router.push('/admin/dashboard', undefined))
          .catch((err) => console.log(err.response.data))
      }
    }, [loginFormState, authManager, router])

  return {
    loginFormState,
    setLoginFormState,
    handleEmailChange,
    handlePasswordChange,
    handleLoginFormSubmit
  }
}

export default useLoginForm
