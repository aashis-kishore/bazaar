import styled from 'styled-components'
import LoginForm from './LoginForm'

const StyledMain = styled.main`
  position: absolute;
  top: 25%;
  bottom: 25%;
  left: 5%;
  right: 5%;
`

const Login = () => {
  return (
    <StyledMain>
      <LoginForm />
    </StyledMain>
  )
}

export default Login
