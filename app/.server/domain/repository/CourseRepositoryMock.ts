import type { CourseRepositoryI } from '~/.server/domain/repository/CourseRepositoryI';
import type { Course } from '~/types';
import { courses } from '~/.server/mocks/mock-data'

export class CourseRepositoryMock implements CourseRepositoryI {
	findById(id: number): Course | undefined {
		return courses.find(c => c.id === id)
	}

	findByTitle(title: string): Course | undefined {
		return courses.find(c => c.title === title)
	}

	findMany(): Course[] {
		return courses
	}
}
