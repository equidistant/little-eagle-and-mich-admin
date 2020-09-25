const STATE = {
	FIND_TAG_START: 'FIND_TAG_START',
	VALIDATE_TAG: 'VALIDATE_TAG',
	CREATE_TAG: 'CREATE_TAG'
}

const TAGS = ['HEADER', 'BOLD', 'TXT', 'PORTRAITS', 'IMG', 'LINK']

const parseText = (text) => {
	let currentState = STATE.FIND_TAG_START
	let currentTag = ''
	let tags = []
	while (text.length > 0) {
		switch (currentState) {
			case STATE.FIND_TAG_START:
				if (text.charAt(0) !== '<') {
					throw new Error('Invalid opening tag.')
				}
				currentState = STATE.VALIDATE_TAG
				text = text.substr(1)
				break
			case STATE.VALIDATE_TAG: 
				currentTag = text.substr(0, text.indexOf('>'))
				if (!TAGS.includes(currentTag)) {
					throw new Error('Invalid tag name.')
				}
				if (text.length === 0) {
					throw new Error('Invalid opening tag.')
				}
				text = text.substr(text.indexOf('>') + 1)
				currentState = STATE.CREATE_TAG
				break
			case STATE.CREATE_TAG:
				if (text.indexOf(`</${currentTag}>`) === -1) {
					throw new Error(`Invalid closing ${currentTag} tag.`)
				}
				let data = text.substr(0, text.indexOf(`</${currentTag}>`))
				tags.push({
					name: currentTag,
					data
				})
				text = text.substr(text.indexOf(`</${currentTag}>`) + currentTag.length + 3)
				currentState = STATE.FIND_TAG_START
				break
			default: 
				break
		}
	}
	if (currentState !== STATE.FIND_TAG_START) {
		throw new Error('Invalid tag structure.')
	}
	return tags
}

export default parseText