import { usersToLessons } from '~/.server/mocks/raw-sample'
import type { UsersToLessons } from '~/types'

// TODO: hard coded stuff
export class ProgressService {
	getUserProgress(userId: number): UsersToLessons[] {
		return usersToLessons.filter(e => e.userId === userId)
	}
}
