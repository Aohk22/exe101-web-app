import { Link, useLoaderData, useRouteLoaderData } from 'react-router';
import { ArrowRight, BookOpen, Clock, GraduationCap, PlayCircle } from 'lucide-react';
import type { Course, Lesson, UsersToLessons } from '~/types';
import StatCard from '~/components/StatCard';
import CourseCard from '~/components/CourseCard';
import { courseService, progressService } from '~/.server/container/services';
import { motion } from 'motion/react';

export async function loader() {
	const courses = courseService.getCourses()
	const coursesWithLesson = courses.map(course => ({
		...course,
		lessons: courseService.getCourseLessons(course.id),
	}))
	const progress = progressService.getUserProgress(1)
	return { coursesWithLesson, progress }
}

function LatestCourse({ course }: { course: Course }) {
	const { progress } = useLoaderData() as { progress: UsersToLessons[] }
	const completed = progress.filter(p => p.completed === true).length
	const all = progress.length
	const percent = completed / all * 100

	return (
		<section>
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-xl font-semibold text-neutral-900">Continue Learning</h2>
				<Link to="/courses" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
					View all <ArrowRight className="w-4 h-4" />
				</Link>
			</div>

			<div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
				<div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden relative group">
					<img
						src={course.thumbnail}
						alt={course.title}
						className="w-full h-full object-cover"
						referrerPolicy="no-referrer"
					/>
					<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
						<PlayCircle className="w-12 h-12 text-white" />
					</div>
				</div>

				<div className="flex-1 space-y-4">
					<div>
						<span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
							{course.category}
						</span>
						<h3 className="text-2xl font-bold text-neutral-900 mt-2">{course.title}</h3>
						<p className="text-neutral-500 mt-1">Module 3: Advanced Layouts & Grid Systems</p>
					</div>

					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span className="text-neutral-600 font-medium">{percent}% complete</span>
							<span className="text-neutral-400">12/24 lessons</span>
						</div>
						<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: `${percent}%` }}
								transition={{ duration: 1, ease: "easeOut" }}
								className="h-full bg-indigo-600 rounded-full"
							/>
						</div>
					</div>

					<Link
						to={`/courses/${course.id}`}
						className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
					>
						Resume Lesson
					</Link>
				</div>
			</div>
		</section >
	)
}

function Stats() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{/* TODO: replace placeholder value with actual data */}
			<StatCard label="Courses in progress" value="" icon={<BookOpen className="text-blue-600 w-5 h-5" />} bg="" />
			<StatCard label="Completed courses" value="" icon={<GraduationCap className="text-yellow-600 w-5 h-5" />} bg="" />
			<StatCard label="Learning hours" value="" icon={<Clock className="text-pink-600 w-5 h-5" />} bg="" />
		</section>
	)
}

function Recommends({ courses }: { courses: (Course & { lessons: Lesson[] })[] }) {
	return (
		<section>
			<h2 className="text-xl font-semibold text-neutral-900 mb-6">Recommended for you</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} lessonCount={course.lessons.length} />
				))}
			</div>
		</section>
	)
}

export default function Dashboard() {
	const user = useRouteLoaderData('routes/protected')
	const { coursesWithLesson } = useLoaderData() as {
		coursesWithLesson: (Course & { lessons: Lesson[] })[]
	}
	const courses = coursesWithLesson

	return (
		<div className="space-y-10">
			<section>
				<h1 className="text-3xl font-bold text-neutral-900">Welcome back, {user}</h1>
			</section >
			<LatestCourse course={courses[0]} />
			<Stats />
			<Recommends courses={courses.slice(1)} />
		</div>
	);
}

