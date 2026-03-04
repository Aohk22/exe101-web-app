import { getCourses } from '~/utils/course-utils';
import { Link, useRouteLoaderData } from 'react-router';
import { motion } from 'motion/react';
import { BookOpen, Clock, Star, ArrowRight, PlayCircle, GraduationCap } from 'lucide-react';

const COURSES = getCourses()

function Head() {
	const continueCourse = COURSES[0];
	const user = useRouteLoaderData('routes/Protected')

	return (
		<>
			<section>
				<h1 className="text-3xl font-bold text-neutral-900">Welcome back, {user}</h1>
			</section >

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
							src={continueCourse.thumbnail}
							alt={continueCourse.title}
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
								{continueCourse.category}
							</span>
							<h3 className="text-2xl font-bold text-neutral-900 mt-2">{continueCourse.title}</h3>
							<p className="text-neutral-500 mt-1">Module 3: Advanced Layouts & Grid Systems</p>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-neutral-600 font-medium">{continueCourse.progress}% complete</span>
								<span className="text-neutral-400">12/24 lessons</span>
							</div>
							<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: `${continueCourse.progress}%` }}
									transition={{ duration: 1, ease: "easeOut" }}
									className="h-full bg-indigo-600 rounded-full"
								/>
							</div>
						</div>

						<Link
							to={`/courses/${continueCourse.id}`}
							className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
						>
							Resume Lesson
						</Link>
					</div>
				</div>
			</section >
		</>
	)
}

function Body() {
	const recommendedCourses = COURSES.slice(1);

	return (
		<>
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{[
					{ label: 'Courses in Progress', value: '4', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
					{ label: 'Completed Courses', value: '12', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
					{ label: 'Learning Hours', value: '124h', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
					{ label: 'Achievement Points', value: '2,450', icon: Star, color: 'text-purple-600', bg: 'bg-purple-50' },
				].map((stat, i) => (
					<div key={i} className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
						<div className={stat.bg + " w-10 h-10 rounded-xl flex items-center justify-center mb-4"}>
							<stat.icon className={stat.color + " w-5 h-5"} />
						</div>
						<p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
						<p className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</p>
					</div>
				))}
			</section>

			<section>
				<h2 className="text-xl font-semibold text-neutral-900 mb-6">Recommended for you</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{recommendedCourses.map((course) => (
						<Link
							key={course.id}
							to={`/courses/${course.id}`}
							className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
						>
							<div className="aspect-video overflow-hidden">
								<img
									src={course.thumbnail}
									alt={course.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									referrerPolicy="no-referrer"
								/>
							</div>
							<div className="p-5 space-y-3">
								<div className="flex items-center justify-between">
									<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
										{course.category}
									</span>
									<div className="flex items-center gap-1 text-xs text-neutral-500">
										<Clock className="w-3 h-3" />
										{course.duration}
									</div>
								</div>
								<h3 className="font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
									{course.title}
								</h3>
								<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
									<p className="text-xs text-neutral-500">By {course.instructor}</p>
									<p className="text-xs font-bold text-neutral-900">{course.lessonsCount} lessons</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</>
	)
}

export default function Dashboard() {

	return (
		<div className="space-y-10">
			{/* Welcome section */}
			<Head />
			{/* Stats Grid */}
			<Body />
		</div>
	);
}

