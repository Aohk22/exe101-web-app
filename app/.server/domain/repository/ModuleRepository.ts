import type { Module } from "~/types";

export interface ModuleRepository {
	findById(id: number): Module | undefined
	findMany(): Module[]
	findByCourseId(courseId: number): Module[]
}
