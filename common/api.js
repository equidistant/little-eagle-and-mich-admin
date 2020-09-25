export const registerRequest = (data) => {
	return postRequest({
		url: '/user/register',
		data
	})
}

export const loginRequest = (data) => {
	return postRequest({
		url: '/user/login',
		data
	})
}

export const checkSessionRequest = (data) => {
	return getRequest({
		url: '/user/checkSession'
	})
}

export const logoutRequest = (data) => {
	return getRequest({
		url: '/user/logout'
	})
}

export const createPostRequest = (data) => {
	return postRequest({
		url: '/post',
		data
	})
}

export const createGalleryRequest = (data) => {
	return postRequest({
		url: '/gallery',
		data
	})
}

export const getPostsRequest = (data) => {
	return getRequest({
		url: '/post'
	})
}

export const createPost = async ({ data, callback }) => {
	try {
		const response = await createPostRequest(data)
		if (response.ok) {
			callback('Post created!')
		} else {
			callback('Error occurred!')
			console.log(err)
		}
	} catch (err) {
		callback('Error occurred!')
		console.log(err)
	}
}

export const createGallery = async ({ data, callback }) => {
	try {
		const response = await createGalleryRequest(data)
		if (response.ok) {
			callback('Gallery created!')
		} else {
			callback('Error occurred!')
			console.log(err)
		}
	} catch (err) {
		callback('Error occurred!')
		console.log(err)
	}
}

const postRequest = async ({ url, data = {} }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
	  method: 'POST',
	  credentials: 'include',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data)
	})
	return response
}

export const getRequest = async ({ url }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
		method: 'GET',
		credentials: 'include'
	})
	return response
}
