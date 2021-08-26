import styled, { keyframes } from 'styled-components'
import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AuthContext } from '../../hooks/useAuth'
import useRedirect from '../../hooks/useRedirect'
import { Icon } from '@iconify/react'
import signOut from '@iconify/icons-codicon/sign-out'

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  
  to {
    transform: translateX(-100%);
  }
`

const slideIn = keyframes`
 from {
    transform: translateX(-100%);
 }

 to {
    transform: translateX(0);
 }
`

const StyledMain = styled.main`
  .main-pane {
    filter: blur(2px);
  }

  .main-pane.active {
    filter: none;
  }

  .menu-pane {
    display: flex;
    flex-direction: column;
    animation: ${slideOut} 0.3s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 75%;
    transform: translateX(-100%);
    background-color: ${({ theme }) => theme.bg};
    /* border-right: 1px solid ${({ theme }) => theme.fg}; */
    opacity: 0.92;
    z-index: 1;
  }

  .menu-pane.active {
    animation: ${slideIn} 0.3s ease-in;
    transform: translateX(0);
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.fg};
  }

  .menu-item .text {
    padding: 0 5px;
  }

  .menu-item svg {
    font-size: larger;
  }
`

const Dashboard = () => {
  useRedirect()

  const authManager = useContext(AuthContext)
  const LOGO_HEIGHT = 40

  return (
    <StyledMain>
      <nav className="menu-pane">
        <Link href="/admin/dashboard">
          <a>
            <Image
              src="/po-logo.png"
              alt="pegaone logo"
              width={LOGO_HEIGHT * 2.762711}
              height={LOGO_HEIGHT}
            />
          </a>
        </Link>
        <Link href="/admin/logout">
          <a className="menu-item">
            <Icon icon={signOut} />
            <span className="text">Logout</span>
          </a>
        </Link>
      </nav>
      <section className="main-pane active">
        {authManager?.user && <h1>{authManager?.user.name}</h1>}
      </section>
    </StyledMain>
  )
}

export default Dashboard
