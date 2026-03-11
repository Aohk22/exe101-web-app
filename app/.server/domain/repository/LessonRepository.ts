import type { Lesson } from "~/types";

export interface LessonRepository {
	findById(id: number): Lesson | undefined
	findByModuleId(moduleId: number): Lesson[]
	findMany(): Lesson[]
}
