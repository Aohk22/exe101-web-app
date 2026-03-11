import type { ModuleRepository } from "~/.server/domain/repository/ModuleRepository";
import type { Module } from "~/types";
import { modules } from "~/.server/mocks/raw-sample";

export class MockModuleRepository implements ModuleRepository {
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
