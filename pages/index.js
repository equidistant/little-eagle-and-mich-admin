import styled from 'styled-components'
import { HomeRoute } from '../contexts/auth'

const HomePage = ({ isAuthenticated, username }) => {
  if (isAuthenticated) {
    return (
      <Root>
        <Message>
          <Welcome>Welcome</Welcome>
          <Username>{username}</Username>
        </Message>
      </Root>
    )
  }
  if (!isAuthenticated) {
    return (
      <Root>
        <Message>
          <Welcome>Welcome</Welcome>
          <Username>guest</Username>
        </Message>
      </Root>
    )
  }
}

const Root = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  display: flex;
  flex-direction: row;
`

const Welcome = styled.p`
  font-size: 24px;
`

const Username = styled.p`
  margin-left: 5px;
  display: inline;
  font-size: 24px;
  font-weight: bold;
`

export default HomeRoute(HomePage)