import {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react'

export interface User {
  isAdmin: boolean
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

interface AuthManager {
  user: null | User
  setUser: Dispatch<SetStateAction<null | User>>
}

export const AuthContext = createContext<null | AuthManager>(null)

interface UseAuth {
  (): AuthManager
}

const useAuth: UseAuth = () => {
  const [user, setUser] = useState<null | User>(null)

  return {
    user,
    setUser
  }
}

export default useAuth
