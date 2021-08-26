import styled from 'styled-components'
import { useContext } from 'react'
import { AuthContext } from '../../hooks/useAuth'
import useRedirect from '../../hooks/useRedirect'

const StyledMain = styled.main`
`

const Dashboard = () => {
  useRedirect()

  const authManager = useContext(AuthContext)

  return (
    <StyledMain>
      {authManager?.user && <h1>{authManager?.user.name}</h1>}
    </StyledMain>
  )
}

export default Dashboard
