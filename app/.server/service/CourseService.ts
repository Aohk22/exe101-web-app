import type { Course, Lesson, Module } from "~/types";
import type { CourseRepositoryI } from "../domain/repository/CourseRepositoryI";
import type { ModuleRepositoryI } from "../domain/repository/ModuleRepositoryI";
import type { LessonRepositoryI } from "../domain/repository/LessonRepositoryI";

export class CourseService {
	constructor(
		private courseRepository: CourseRepositoryI,
		private moduleRepository: ModuleRepositoryI,
		private lessonRepository: LessonRepositoryI
	) { }

	getCourses(): Course[] {
		return this.courseRepository.findMany();
	}

	getCourse(courseId: number): Course {
		const course = this.courseRepository.findById(courseId);
		if (course === undefined) {
			throw new Error("could not find course")
		}
		return course
	}

	getCourseModules(courseId: number): Module[] {
		const modules = this.moduleRepository.findByCourseId(courseId);
		return modules
	}

	getCourseLessons(courseId: number): Lesson[] {
		const modules = this.getCourseModules(courseId)
		const lessons = modules.map(m => this.lessonRepository.findByModuleId(m.id)).flat()
		return lessons
	}
}
