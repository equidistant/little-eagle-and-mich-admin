import styled from 'styled-components'
import NavLink from './NavLink'
import useAuth from '../contexts/auth'

const Header = () => {
	const { isAuthenticated } = useAuth()
	if (isAuthenticated) {
		return (
		  <Root>
			<Logo>
				Little Eagle & Mich Admin Panel
			</Logo>
			<Links>
				<NavLink href='/' name='Home'/>
				<NavLink href='/post' name='Post'/>
				<NavLink href='/gallery' name='Gallery'/>
				<NavLink href='/logout' name='Logout'/>
			</Links>
		  </Root>
		)
	  }
	  if (!isAuthenticated) {
		return (
		  <Root>
			<Logo>
				Little Eagle & Mich Admin Panel
			</Logo>
			<Links>
				<NavLink href='/' name='Home'/>
				<NavLink href='/login' name='Login'/>
				<NavLink href='/register' name='Register'/>
			</Links>
		  </Root>
		)
	  }
}

const Root = styled.header`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: #CDCDCD;
	padding: 20px;
`

const Logo = styled.h3`

`

const Links = styled.div`
	display: flex;
	flex-direction: row;
`

export default Header