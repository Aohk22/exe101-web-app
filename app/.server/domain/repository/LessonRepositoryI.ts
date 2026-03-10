import type { Lesson } from "~/types";

export interface LessonRepositoryI {
	findById(id: number): Lesson | undefined
	findByModuleId(moduleId: number): Lesson[]
	findMany(): Lesson[]
}
