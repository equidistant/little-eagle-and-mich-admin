import { useState } from 'react'
import styled from 'styled-components'
import { ProtectRoute } from '../contexts/auth'
import { createGallery } from '../common'

const GalleryPage = ({ username }) => {
  const [title, setTitle] = useState('travels')
  const [longTitle, setLongTitle] = useState('Travels Dugi Naslov')
  const [baseUrl, setBaseUrl] = useState('https://littleeagle.s3.eu-central-1.amazonaws.com')
  const [ratios, setRatios] = useState('1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.7777777777777777,0.6671875,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.7777777777777777,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.5023474178403755,0.6671875,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.5058823529411764,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.5023474178403755,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.3333333333333333,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,0.6671875,0.6671875,1.4988290398126465,1.4988290398126465,0.6671875,0.6671875,0.6671875,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,0.6671875,0.6671875,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,0.6671875,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465,1.4988290398126465')
  const [message, setMessage] = useState('')
  const handleCreate = () => {
    try {
      createGallery({
        data: {
          title, longTitle, baseUrl, ratios: ratios.split(',').map(ratio => Number(ratio))
        },
        callback: (message) => {
          setMessage(message)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
	return (
    <Root>
      <Header>Create new gallery</Header>
      <MetaInformation>
        <InputRow>
          <Label>Title:</Label>
          <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)}  placeholder='Enter gallery title'/>
        </InputRow>
        <InputRow>
          <Label>LongTitle:</Label>
          <Input type='text' value={longTitle} onChange={(e) => setLongTitle(e.target.value)}  placeholder='Enter long gallery title'/>
        </InputRow>
        <InputRow>
          <Label>Base image url:</Label>
          <Input type='text' value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)}  placeholder='Enter base url for images'/>
        </InputRow>
        <TextArea type='text' value={ratios} onChange={(e) => setRatios(e.target.value)}  placeholder='Enter ratios'/>
        <Buttons>
          <ActionButton onClick={handleCreate}>Create</ActionButton>
        </Buttons>
        {message && <Message>{message}</Message>}
      </MetaInformation>
    </Root>
  )
}

const Root = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.h2`
  margin-top: 40px;
`

const MetaInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-left: 20px;
  margin-top: 40px;
`

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

const Label = styled.p`
  width: max-content;
  flex: 2;
`

const Input = styled.input`
  height: 35px;
  flex: 3;
  padding-left: 20px;
  border-radius: 4px;
  border: 1px solid black;
  &:hover {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	}
	&:focus {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  }
`

const TextArea = styled.textarea`
  height: 250px;
  white-space: pre-wrap;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid black;
  margin-top: 40px;
  font-family: Roboto;
  &:hover {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
	}
	&:focus {
		box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`

const ActionButton = styled.button`
  width: 100px;
  height: 35px;
  width: 100px;
  border-radius: 4px;
  border: 1px solid black;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  &:first-of-type {
    margin-left: 0;
  }
`

const Message = styled.p`

`

export default ProtectRoute(GalleryPage)