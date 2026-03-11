import type { CourseRepository } from '~/.server/domain/repository/CourseRepository';
import type { Course } from '~/types';
import { courses } from '~/.server/mocks/raw-sample'

export class MockCourseRepository implements CourseRepository {
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
