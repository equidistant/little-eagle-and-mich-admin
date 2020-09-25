import { useState, useContext } from 'react'
import { RedirectRoute } from '../contexts/auth'
import styled from 'styled-components'
import useAuth from '../contexts/auth'


const RegisterPage = () => {
	const { register } = useAuth()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const handleRegister = () => {
		if (username && password) {
			register({ username, password })
		}
	}
	return (
    <RootContainer>
		<H1>Register</H1>
		<Form>			
			<Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username...'/>
			<Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password...'/>
			<SubmitButton onClick={handleRegister}>Register</SubmitButton>
		</Form>
    </RootContainer>
  )
}

export default RedirectRoute(RegisterPage)

const RootContainer = styled.div`
	min-height: calc(100vh - 64px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const H1 = styled.h1`
	
`

const Form = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`

const Input = styled.input`
	width: 300px;
	height: 50px;
	margin-top: 20px;
	&:first-of-type {
		margin-top: 0;
	}
	border-radius: 4px;
	border: 1px solid black;
	padding-left: 20px;
	&:hover {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	}
	&:focus {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	}
`


const SubmitButton = styled.button`
	margin-top: 20px;
	width: 100px;
	height: 30px;
	border-radius: 4px;
	border: 0;
	transition-property: box-shadow;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:active {
		transform: translateY(2px);
	}
	&:hover {
		cursor: pointer;
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	}
`