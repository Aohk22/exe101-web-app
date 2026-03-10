import type { Module } from "~/types";

export interface ModuleRepositoryI {
	findById(id: number): Module | undefined
	findMany(): Module[]
	findByCourseId(courseId: number): Module[]
}
