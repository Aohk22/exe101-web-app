import type { Course } from '~/types'

export interface CourseRepository {
	findById(id: number): Course | undefined
	findByTitle(title: string): Course | undefined
	findMany(): Course[]
}
