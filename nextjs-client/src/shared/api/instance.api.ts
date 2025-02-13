import { FetchClient } from '../utils'

export const api = new FetchClient({
	baseUrl: process.env.NEXT_PUBLIC_SERVER_URL as string,
	options: {
		credentials: 'include'
	}
})
