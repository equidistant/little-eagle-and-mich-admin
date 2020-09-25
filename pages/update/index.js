import styled from 'styled-components'
import { ProtectRoute } from '../../contexts/auth'

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
	  const posts = await res.json()
	  return {
		  props: {
			  posts
		  }
	  }
}

const UpdatePage = function ({ posts }) {
  return (
    <div className={'root'}>
      posts
    </div>
  )
}

export default ProtectRoute(UpdatePage)