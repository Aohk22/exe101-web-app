export interface SeederI {
	insertUsers(): Promise<void>
	insertCourses(): Promise<void>
	insertModules(): Promise<void>
	insertLessons(): Promise<void>
	insertEnrollment(): Promise<void>
	insertProgress(): Promise<void>
	insertReviews(): Promise<void>
	run(): Promise<void>
}
