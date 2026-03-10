import { CourseService } from "~/.server/service/CourseService"
import { CourseRepositoryMock } from "~/.server/domain/repository/CourseRepositoryMock";
import { ModuleRepositoryMock } from "~/.server/domain/repository/ModuleRepositoryMock";
import { LessonRepositoryMock } from "../domain/repository/LessonRepositoryMock";
import { ProgressService } from "../service/ProgressService";

const courseRepo = new CourseRepositoryMock()
const moduleRepo = new ModuleRepositoryMock()
const lessonRepo = new LessonRepositoryMock()

export const courseService = new CourseService(courseRepo, moduleRepo, lessonRepo);
export const progressService = new ProgressService()
