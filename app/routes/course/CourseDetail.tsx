import { useParams, Link } from 'react-router';
import { getCourses, getModules } from '~/utils/course-utils';
import { Play, CheckCircle2, Clock, BookOpen, User, Star, Share2, Heart, ChevronRight, GraduationCap } from 'lucide-react';
// import { motion } from 'motion/react';

const COURSES = getCourses()
const MODULES = getModules()

export default function CourseDetail() {
	const { courseId } = useParams();
	const course = COURSES.find(c => c.id === courseId) || COURSES[0];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
			{/* Left Content */}
			<div className="lg:col-span-2 space-y-8">
				{/* Description */}
				<div className="space-y-4">
					<div className="flex items-center gap-2">
						<Link to="/courses" className="text-sm text-neutral-500 hover:text-indigo-600 transition-colors">Courses</Link>
						<ChevronRight className="w-4 h-4 text-neutral-300" />
						<span className="text-sm text-neutral-900 font-medium">{course.title}</span>
					</div>
					<h1 className="text-4xl font-bold text-neutral-900 tracking-tight">{course.title}</h1>
					<p className="text-lg text-neutral-500 leading-relaxed">
						{course.description}
					</p>
				</div>

				{/* Instructor/Ratings */}
				<div className="flex flex-wrap items-center gap-6 py-4 border-y border-neutral-100">
					<div className="flex items-center gap-2">
						{/* TODO: avatar is preferable user controlled */}
						{/* TODO: instructor name should be a separate entity from course */}
						<div className="w-10 h-10 rounded-full bg-neutral-100 overflow-hidden">
							<img src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`} alt={course.instructor} />
						</div>
						<div>
							<p className="text-xs text-neutral-400 font-medium">Instructor</p>
							<p className="text-sm font-bold text-neutral-900">{course.instructor}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
							<Star className="w-5 h-5 text-amber-500 fill-amber-500" />
						</div>
						{/* TODO: ratings should be fetch from database */}
						<div>
							<p className="text-xs text-neutral-400 font-medium">Rating</p>
							<p className="text-sm font-bold text-neutral-900">{'<ratings>'}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						{/* TODO: enrollment count should be fetch from database */}
						<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
							<User className="w-5 h-5 text-indigo-600" />
						</div>
						<div>
							<p className="text-xs text-neutral-400 font-medium">Students</p>
							<p className="text-sm font-bold text-neutral-900">{'<enrolled_count>'}</p>
						</div>
					</div>
				</div>

				{/* Curriculum */}
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold text-neutral-900">Course Content</h2>
						<p className="text-sm text-neutral-500">{MODULES.length} modules • {course.lessonsCount} lessons</p>
					</div>

					<div className="space-y-4">
						{MODULES.map((module, i) => (
							<div key={module.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
								<div className="p-4 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between">
									<h3 className="font-bold text-neutral-900">Module {i + 1}: {module.title}</h3>
									<span className="text-xs text-neutral-500 font-medium">{module.lessons.length} lessons</span>
								</div>
								<div className="divide-y divide-neutral-50">
									{module.lessons.map((lesson) => (
										<Link
											key={lesson.id}
											to={`/courses/${course.id}/lessons/${lesson.id}`}
											className="p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors group"
										>
											<div className="flex items-center gap-4">
												<div className={
													"w-8 h-8 rounded-full flex items-center justify-center transition-colors" +
														lesson.completed ? "bg-emerald-100 text-emerald-600" : "bg-neutral-100 text-neutral-400 group-hover:bg-indigo-100 group-hover:text-indigo-600"
												}>
													{lesson.completed ? <CheckCircle2 className="w-5 h-5" /> : <Play className="w-4 h-4" />}
												</div>
												<div>
													<p className={
														"text-sm font-medium transition-colors" +
															lesson.completed ? "text-neutral-500" : "text-neutral-900 group-hover:text-indigo-600"
													}>
														{lesson.title}
													</p>
													<div className="flex items-center gap-2 mt-0.5">
														<span className="text-[10px] font-bold uppercase text-neutral-400">{lesson.type}</span>
														<span className="w-0.5 h-0.5 bg-neutral-300 rounded-full"></span>
														<span className="text-[10px] text-neutral-400">{lesson.duration}</span>
													</div>
												</div>
											</div>
											{!lesson.completed && (
												<span className="text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
													Start
												</span>
											)}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Right Sidebar - Sticky Card */}
			<div className="space-y-6">
				<div className="sticky top-24 bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl shadow-neutral-200/50 space-y-6">
					<div className="aspect-video rounded-2xl overflow-hidden relative group">
						<img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
						<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
							<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
								<Play className="w-6 h-6 text-indigo-600 fill-indigo-600 ml-1" />
							</div>
						</div>
					</div>

					<div className="space-y-4">
						{/* TODO: retrive pricing info from database */}
						<div className="flex items-baseline gap-2">
							<span>{'<Pricing info here>'}</span>
						</div>

						{/* TODO: enrolls user to a course */}
						<button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]">
							Enroll Now
						</button>

						{/* TODO: items in wishlist sends notification based on sale */}
						{/* TODO: share button returns link to course */}
						<div className="grid grid-cols-2 gap-2">
							<button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
								<Heart className="w-4 h-4" /> Wishlist
							</button>
							<button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
								<Share2 className="w-4 h-4" /> Share
							</button>
						</div>
					</div>

					<div className="space-y-4 pt-4 border-t border-neutral-100">
						<p className="text-sm font-bold text-neutral-900">This course includes:</p>
						<ul className="space-y-3">
							{[
								{ icon: Clock, text: 'Full lifetime access' },
								{ icon: BookOpen, text: '24 downloadable resources' },
								{ icon: GraduationCap, text: 'Certificate of completion' },
								{ icon: Play, text: 'Access on mobile and TV' },
							].map((item, i) => (
								<li key={i} className="flex items-center gap-3 text-sm text-neutral-600">
									<item.icon className="w-4 h-4 text-indigo-600" />
									{item.text}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
