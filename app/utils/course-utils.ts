import type { Course, Module } from "~/types"
import { MOCK_COURSES, MOCK_MODULES } from "~/utils/data"

export function getCourses(): Course[] {
	return MOCK_COURSES
}

export function getModules(): Module[] {
	return MOCK_MODULES
}
