import { CourseService } from "~/.server/service/CourseService"
import { MockCourseRepository } from "~/.server/infrastructure/repository/MockCourseRepository";
import { MockModuleRepository } from "~/.server/infrastructure/repository/MockModuleRepository";
import { MockLessonRepository } from "~/.server/infrastructure/repository/MockLessonRepository";
import { ProgressService } from "~/.server/service/ProgressService";

const courseRepo = new MockCourseRepository()
const moduleRepo = new MockModuleRepository()
const lessonRepo = new MockLessonRepository()

export const courseService = new CourseService(courseRepo, moduleRepo, lessonRepo);
export const progressService = new ProgressService()
