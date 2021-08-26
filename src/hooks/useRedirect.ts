import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from './useAuth'

interface UseRedirectArgs {
  to: string
  shallow: boolean
}

interface UseRedirect {
  (args?: UseRedirectArgs): void
}

const useRedirect: UseRedirect = ({
  to,
  shallow
} = { to: '/admin/login', shallow: false }) => {
  const router = useRouter()
  const authManager = useContext(AuthContext)

  useEffect(() => {
    if (!authManager?.user) {
      const hasUser = localStorage.getItem('ws-user')

      if (hasUser) {
        const user = JSON.parse(hasUser)
        user && authManager?.setUser(user)
        if (user) {
          return
        }
      }

      router.push(to, undefined, { shallow })
    }
  }, [authManager, router, to, shallow])
}

export default useRedirect
