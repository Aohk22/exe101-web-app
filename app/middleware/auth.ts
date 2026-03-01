import { redirect } from 'react-router'
import { userContext } from '~/context'

export const authMiddleware = async ({
	request,
	context,
}: any) => {
	console.log('Log: authMiddleware loaded')
	// const session = await getSession(request)
	// const userId = session.get("userId")
	const userId = 'khoa'

	if (!userId) {
		throw redirect("/login")
	}

	// const user = await getUserById(userId)
	context.set(userContext, userId)
}
