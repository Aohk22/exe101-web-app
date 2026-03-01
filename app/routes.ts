import {
	type RouteConfig,
	layout,
	route
} from "@react-router/dev/routes"

export default [
	route('/login', './routes/Login.tsx'),

	route('/', './routes/Protected.tsx', [
		layout('./routes/layout.tsx', [
			route('/', './routes/dashboard/Dashboard.tsx'),

			route('/courses', './routes/course/Courses.tsx'),
			route('/courses/:courseId', './routes/course/CourseDetail.tsx'),
			route('/courses/:courseId/lessons/:lessonId', './routes/course/Lesson.tsx'),

			route('*', 'routes/CatchAll.tsx')
		]),
	]),
] satisfies RouteConfig
