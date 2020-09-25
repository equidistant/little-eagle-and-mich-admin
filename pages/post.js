import { useState } from 'react'
import styled from 'styled-components'
import { ProtectRoute } from '../contexts/auth'
import { parseText, buildHtml, createPost } from '../common'

const PostPage = ({ username }) => {
  const [title, setTitle] = useState('suza-indije')
  const [longTitle, setLongTitle] = useState('Suza Indije')
  const [description, setDescription] = useState('Dva tjedna u zemlji čaja, cimeta i kokosa - Šri Lanka')
  const [tags, setTags] = useState('travel blog, sri lanka, kandy, nuwara eliya')
  const [coverImg, setCoverImg] = useState('https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/travels/img63.jpg')
  const [text, setText] = useState(`<BOLD>Kako je izgledao naš dvotjedni plan i što smo sve odlučili vidjeti? Što nas je oduševilo a bez čega smo ipak mogli - potražite u nastavku.</BOLD><HEADER>Prvi naslov</HEADER><TXT>Onda ide druga malo duza jer ima vise rijeci u sebi. I onda treca, mozda najduza mozda najkraca, tko zna. Tu sad pisemo neki blog. Ovo je prvi put da pisemo ovako neku dugu i recenicu i onda jos malo.</TXT><TXT>Jos jedna vrlo dugacka recenica jer mi imamo toliko toga za reci.</TXT><PORTRAITS>https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/people/img2.jpg https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/people/img7.jpg</PORTRAITS><IMG>https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/travels/img35.jpg</IMG><HEADER>Prvi naslov</HEADER><TXT>Onda ide druga malo duza jer ima vise rijeci u sebi. I onda treca, mozda najduza mozda najkraca, tko zna. Tu sad pisemo neki blog. Ovo je prvi put da pisemo ovako neku dugu i recenicu i onda jos malo.</TXT><TXT>Jos jedna vrlo dugacka recenica jer mi imamo toliko toga za reci.</TXT><PORTRAITS>https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/people/img2.jpg https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/people/img7.jpg</PORTRAITS><IMG>https://littleeagle.s3.eu-central-1.amazonaws.com/gallery/high/travels/img35.jpg</IMG>`)
  const [preview, setPreview] = useState('')
  const [message, setMessage] = useState('')

  const handlePreview = () => {
    try {
      const tags = parseText(text.trim().replace(/(\r\n|\n|\r)/gm,''))
      const html = buildHtml(tags)
      if (!html) {
        return
      }
      setPreview(html)
      setMessage('')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }
  const handleCreate = () => {
    try {
      const nodes = parseText(text.trim().replace(/(\r\n|\n|\r)/gm,''))
      const tagsArray = tags.split(', ').map(tag => tag.trim())
      createPost({
        data: { title, longTitle, description, coverImg, nodes, tags: tagsArray }, 
        callback: (message) => {
          setMessage(message)
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
	return (
    <Root>
      <Header>Create new post</Header>
      <MetaInformation>
        <InputRow>
          <Label>Title:</Label>
          <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)}  placeholder='Enter short title for url'/>
        </InputRow>
        <InputRow>
          <Label>Long Title:</Label>
          <Input type='text' value={longTitle} onChange={(e) => setLongTitle(e.target.value)}  placeholder='Enter long title for text'/>
        </InputRow>
        <InputRow>
          <Label>Description:</Label>
          <Input type='text' value={description} onChange={(e) => setDescription(e.target.value)}  placeholder='Enter description'/>
        </InputRow>
        <InputRow>
          <Label>Tags:</Label>
          <Input type='text' value={tags} onChange={(e) => setTags(e.target.value)}  placeholder='Enter tags'/>
        </InputRow>
        <InputRow>
          <Label>Cover image:</Label>
          <Input type='text' value={coverImg} onChange={(e) => setCoverImg(e.target.value)}  placeholder='Enter cover image url'/>
        </InputRow>
        <TextArea type='text' value={text} onChange={(e) => setText(e.target.value)}  placeholder='Enter post text (with tags i.e. <TXT>, <IMG> etc.)'/>
        <Buttons>
          <ActionButton onClick={handlePreview}>Preview</ActionButton>
          <ActionButton onClick={handleCreate}>Create</ActionButton>
        </Buttons>
        {message && <Message>{message}</Message>}
      </MetaInformation>
      {preview &&    
      <>
        <Header>Preview</Header>   
        <PreviewRoot>
          <CoverImg img={coverImg}/>
          <Body>
            {preview}
          </Body>
        </PreviewRoot>
      </>
      }
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

const PreviewRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

const CoverImg = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Body = styled.div`
  width: 100%;
  max-width: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`

export default ProtectRoute(PostPage)