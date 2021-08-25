import { ReactElement } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Header = styled.header`
  color: ${({ theme }) => theme.fg};
  background-color: ${({ theme }) => theme.bg};
`

const Footer = styled.footer`
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
  return (
    <>
      <Header>
        <Image
          src="/po-logo.png"
          alt="pegaone logo"
          width={50 * 2.762711}
          height={50}
        />
      </Header>
      {children}
      <Footer>
        <p>&copy;2021 PegaOne</p>
      </Footer>
    </>
  )
}

export default Layout
