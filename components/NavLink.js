import Link from 'next/link'
import styled from 'styled-components'

const SLink = styled.a`
	font-style: normal;
	font-size: 16px;
	line-height: 20px;
	color: black;
	margin-left: 20px;
	&:first-of-type {
		margin-left: 0;
	}
`

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <SLink>{name}</SLink>
    </Link>
  )
}

export default NavLink
