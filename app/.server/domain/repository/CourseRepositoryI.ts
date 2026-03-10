import type { Course } from '~/types'

export interface CourseRepositoryI {
	findById(id: number): Course | undefined
	findByTitle(title: string): Course | undefined
	findMany(): Course[]
}
