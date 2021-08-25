import {
  ChangeEventHandler,
  FormEventHandler,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useRouter } from 'next/router'

interface LoginFormState {
  email: string
  password: string
}

type InitState = LoginFormState

type FieldChangeHandler = ChangeEventHandler<HTMLInputElement>

interface HandleLoginFormSubmit {
  (event: SyntheticEvent): void
}

interface UseLoginFormReturn {
  loginFormState: LoginFormState,
  setLoginFormState: Dispatch<SetStateAction<LoginFormState>>,
  handleEmailChange: FieldChangeHandler,
  handlePasswordChange: FieldChangeHandler,
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

  const router = useRouter()

  useEffect(() => {
    console.log('State change:', loginFormState)
  }, [loginFormState])

  const handleEmailChange: FieldChangeHandler = useCallback((event) => {
    const email = event.target.value
    setLoginFormState({ ...loginFormState, email })
  }, [loginFormState])

  const handlePasswordChange: FieldChangeHandler = useCallback((event) => {
    const password = event.target.value
    setLoginFormState({ ...loginFormState, password })
  }, [loginFormState])

  const handleLoginFormSubmit: HandleLoginFormSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const res = await fetch('http://localhost:2020/users')
      const data = await res.json()

      console.log(data)

      const { email, password } = loginFormState

      if (email && password) {
        return router.push('/admin/dashboard', undefined, { shallow: true })
      }
    }, [loginFormState, router])

  return {
    loginFormState,
    setLoginFormState,
    handleEmailChange,
    handlePasswordChange,
    handleLoginFormSubmit
  }
}

export default useLoginForm
