import styled, { keyframes } from 'styled-components'
import { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../../hooks/useAuth'
import useRedirect from '../../hooks/useRedirect'

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  
  to {
    transform: translateX(-200px);
  }
`

const slideIn = keyframes`
 from {
    transform: translateX(-200px);
 }

 to {
    transform: translateX(0);
 }
`

const StyledMain = styled.main`
  .side-pane {
    animation: ${slideOut} 0.3s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    transform: translateX(-200px);
    background-color: ${({ theme }) => theme.fg};
    opacity: 0.99;
    border: none;
    z-index: 1;
  }

  .side-pane.active {
    animation: ${slideIn} 0.3s ease-in;
    transform: translateX(0);
  }
`

const Dashboard = () => {
  useRedirect()

  const authManager = useContext(AuthContext)

  return (
    <StyledMain>
      <div className="side-pane">
        <Link href="/admin/logout">
          <a>Logout</a>
        </Link>
      </div>
      {authManager?.user && <h1>{authManager?.user.name}</h1>}
    </StyledMain>
  )
}

export default Dashboard
