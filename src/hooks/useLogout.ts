import { useContext, useEffect } from 'react'
import { AuthContext } from './useAuth'

interface UseLogout {
  (): void
}

const useLogout: UseLogout = () => {
  const authManager = useContext(AuthContext)

  useEffect(() => {
    localStorage.removeItem('ws-user')

    authManager?.setUser && authManager?.setUser(null)
  }, [authManager])
}

export default useLogout
