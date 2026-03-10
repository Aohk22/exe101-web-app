import {
	type RouteConfig,
	layout,
	route,
	prefix,
	index
} from "@react-router/dev/routes"

export default [
	layout('./routes/auth/layout.tsx', [
		route('/login', './routes/auth/Login.tsx'),
		route('/register', './routes/auth/Register.tsx'),
	]),

	layout('./routes/protected.tsx', [
		layout('./routes/layout.tsx', [
			route('/', './routes/dashboard/Dashboard.tsx'),

			...prefix('courses', [
				index('./routes/course/Courses.tsx'),
				route(':courseId', './routes/course/CourseDetail.tsx'),
				route(':courseId/lessons/:lessonId', './routes/course/Lesson.tsx'),
			]),
		]),
	]),

	route('*', 'routes/CatchAll.tsx')
] satisfies RouteConfig
