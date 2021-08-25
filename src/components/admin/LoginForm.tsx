import styled from 'styled-components'
import useLoginForm from '../../hooks/useLoginForm'

const StyledForm = styled.form`
  position: absolute;
  top: 25%;
  bottom: 25%;

  .text-field {
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.fg};
  } 

  .btn {
    cursor: pointer;
    color: ${({ theme }) => theme.bg};
    background-color: ${({ theme }) => theme.fg};
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1rem;
  }

  .btn-signin {
    margin: 0 25%;
    width: 50%;
  }
`

const LoginForm = () => {
  const {
    loginFormState,
    handleLoginFormSubmit,
    handleEmailChange,
    handlePasswordChange
  } = useLoginForm({ email: '', password: '' })

  return (
    <StyledForm onSubmit={handleLoginFormSubmit}>
      <input
        type="email"
        name="email"
        className="text-field"
        id="email"
        placeholder="email"
        value={loginFormState.email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        className="text-field"
        id="password"
        placeholder="password"
        value={loginFormState.password}
        onChange={handlePasswordChange}
      />
      <input
        type="submit"
        className="btn btn-signin"
        id="sign-in"
        value="Sign In"
      />
    </StyledForm>
  )
}

export default LoginForm
