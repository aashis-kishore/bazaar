import { ReactElement } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import threeBars from '@iconify/icons-codicon/three-bars'
import close from '@iconify/icons-codicon/close'
import accountIcon from '@iconify/icons-codicon/account'
import useAuth, { AuthContext } from '../../hooks/useAuth'
import useMenu from '../../hooks/useMenu'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.fg};
  background-color: ${({ theme }) => theme.bg};

  .icon {
    cursor: pointer;
    font-size: 1.4rem;
    margin: 0 5px;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.fg};
  background-color: ${({ theme }) => theme.bg};
`

type LayoutProps = {
  children: ReactElement
}

interface LayoutCmpnt {
  (props: LayoutProps): ReactElement
}

const Layout: LayoutCmpnt = ({ children }) => {
  const LOGO_HEIGHT = 40
  const authManager = useAuth()
  const { isMenuActive, setIsMenuActive } = useMenu()

  return (
    <AuthContext.Provider value={authManager}>
      <Header>
        <Image
          src="/po-logo.png"
          alt="pegaone logo"
          width={LOGO_HEIGHT * 2.762711}
          height={LOGO_HEIGHT}
        />
        {
          authManager?.user &&
          <div>
            <Icon className="icon" icon={accountIcon} />
            <Icon
              className="icon"
              icon={isMenuActive ? close : threeBars}
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
          </div>
        }
      </Header>
      {children}
      <Footer>
        <p>&copy;2021 PegaOne</p>
      </Footer>
    </AuthContext.Provider>
  )
}

export default Layout
