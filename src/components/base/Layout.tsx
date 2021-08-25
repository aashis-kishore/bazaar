import { ReactElement } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import threeBars from '@iconify/icons-codicon/three-bars'
import accountIcon from '@iconify/icons-codicon/account'

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

  return (
    <>
      <Header>
        <Image
          src="/po-logo.png"
          alt="pegaone logo"
          width={LOGO_HEIGHT * 2.762711}
          height={LOGO_HEIGHT}
        />
        <div>
          <Icon className="icon" icon={accountIcon} />
          <Icon className="icon" icon={threeBars} />
        </div>
      </Header>
      {children}
      <Footer>
        <p>&copy;2021 PegaOne</p>
      </Footer>
    </>
  )
}

export default Layout
