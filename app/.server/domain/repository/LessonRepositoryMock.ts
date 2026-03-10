import type { LessonRepositoryI } from "~/.server/domain/repository/LessonRepositoryI";
import type { Lesson } from "~/types";
import { lessons } from "~/.server/mocks/mock-data";

export class LessonRepositoryMock implements LessonRepositoryI {
	findById(id: number): Lesson | undefined {
		return lessons.find(l => l.id === id)
	}

	findMany(): Lesson[] {
		return lessons
	}

	findByModuleId(moduleId: number): Lesson[] {
		return lessons.filter(l => l.moduleId === moduleId)
	}
}
