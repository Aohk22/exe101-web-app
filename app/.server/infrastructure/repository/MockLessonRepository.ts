import type { LessonRepository } from "~/.server/domain/repository/LessonRepository";
import type { Lesson } from "~/types";
import { lessons } from "~/.server/mocks/raw-sample";

export class MockLessonRepository implements LessonRepository {
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
