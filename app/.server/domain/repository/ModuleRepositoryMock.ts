import type { ModuleRepositoryI } from "~/.server/domain/repository/ModuleRepositoryI";
import type { Module } from "~/types";
import { modules } from "~/.server/mocks/mock-data";

export class ModuleRepositoryMock implements ModuleRepositoryI {
	findById(id: number): Module | undefined {
		return modules.find(m => m.id === id)
	}

	findMany(): Module[] {
		return modules
	}

	findByCourseId(courseId: number): Module[] {
		return modules.filter(m => m.courseId === courseId)
	}
}
