import styled from 'styled-components'

const buildHtml = (tags) => {
	return tags.map(({ name, data }, index) => {
	  switch(name) {
		case 'HEADER': {
		  return (
			<Header key={index}>{data}</Header>
		  )
		}
		case 'BOLD':
			return (
			  <BoldText key={index}>{data}</BoldText>
			)
		case 'TXT':
		  return (
			<Text key={index}>{data}</Text>
		  )
		case 'PORTRAITS': 
			const split = data.split(' ')
		  	return (
				<Portraits key={index}>
					<PortraitImage src={split[0]} key={`k${index}`}/>
					<PortraitImage src={split[1]} key={`p${index}`}/>
			  	</Portraits>
		  )
		case 'IMG': 
		  return (
			<Image src={data} key={index}/>
		  )
		default: 
		  return (
			<div key={index}>{data}</div>
		  )
	  }
	})
  }

const Header = styled.h3`
  width: 620px;
  margin-top: 20px;
`

const Image = styled.img`
  width: 100%;
  margin-top: 20px;
`

const Portraits = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`

const PortraitImage = styled.img`
  width: 100%;
  &:first-of-type {
	margin-right: 10px;
}
  &:last-of-type {
	  margin-left: 10px;
  }
`

const Text = styled.p`
  width: 620px;
  margin-top: 20px;
`

const BoldText = styled.p`
  width: 620px;
  font-weight: 700;
  margin-top: 20px;
`



export default buildHtml