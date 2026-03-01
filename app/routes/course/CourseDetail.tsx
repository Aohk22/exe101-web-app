import { useParams, Link } from 'react-router';
import { getCourses } from '../../utils';
import { Play, CheckCircle2, Clock, BookOpen, User, Star, Share2, Heart, ChevronRight, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const COURSES = getCourses()

const MOCK_MODULES = [
	{
		id: 'm1',
		title: 'Getting Started',
		lessons: [
			{ id: 'l1', title: 'Course Overview', duration: '5:00', completed: true, type: 'video' },
			{ id: 'l2', title: 'Setting up your environment', duration: '12:30', completed: true, type: 'video' },
			{ id: 'l3', title: 'Basic Concepts', duration: '15:45', completed: false, type: 'video' },
		]
	},
	{
		id: 'm2',
		title: 'Core Fundamentals',
		lessons: [
			{ id: 'l4', title: 'Understanding the Architecture', duration: '20:00', completed: false, type: 'video' },
			{ id: 'l5', title: 'Working with Data', duration: '25:15', completed: false, type: 'video' },
			{ id: 'l6', title: 'Quiz: Fundamentals', duration: '10:00', completed: false, type: 'quiz' },
		]
	},
	{
		id: 'm3',
		title: 'Advanced Techniques',
		lessons: [
			{ id: 'l7', title: 'Optimization Strategies', duration: '18:30', completed: false, type: 'video' },
			{ id: 'l8', title: 'Real-world Applications', duration: '30:00', completed: false, type: 'video' },
		]
	}
];

export default function CourseDetail() {
	const { courseId } = useParams();
	const course = COURSES.find(c => c.id === courseId) || COURSES[0];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
			{/* Left Content */}
			<div className="lg:col-span-2 space-y-8">
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

				<div className="flex flex-wrap items-center gap-6 py-4 border-y border-neutral-100">
					<div className="flex items-center gap-2">
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
						<div>
							<p className="text-xs text-neutral-400 font-medium">Rating</p>
							<p className="text-sm font-bold text-neutral-900">4.9 (2.4k reviews)</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
							<User className="w-5 h-5 text-indigo-600" />
						</div>
						<div>
							<p className="text-xs text-neutral-400 font-medium">Students</p>
							<p className="text-sm font-bold text-neutral-900">15,420 enrolled</p>
						</div>
					</div>
				</div>

				{/* Curriculum */}
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold text-neutral-900">Course Content</h2>
						<p className="text-sm text-neutral-500">{MOCK_MODULES.length} modules • {course.lessonsCount} lessons</p>
					</div>

					<div className="space-y-4">
						{MOCK_MODULES.map((module, i) => (
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
												<div className={cn(
													"w-8 h-8 rounded-full flex items-center justify-center transition-colors",
													lesson.completed ? "bg-emerald-100 text-emerald-600" : "bg-neutral-100 text-neutral-400 group-hover:bg-indigo-100 group-hover:text-indigo-600"
												)}>
													{lesson.completed ? <CheckCircle2 className="w-5 h-5" /> : <Play className="w-4 h-4" />}
												</div>
												<div>
													<p className={cn(
														"text-sm font-medium transition-colors",
														lesson.completed ? "text-neutral-500" : "text-neutral-900 group-hover:text-indigo-600"
													)}>
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
						<div className="flex items-baseline gap-2">
							<span className="text-3xl font-bold text-neutral-900">$49.99</span>
							<span className="text-neutral-400 line-through text-sm">$89.99</span>
							<span className="text-emerald-600 font-bold text-sm">45% OFF</span>
						</div>

						<button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]">
							Enroll Now
						</button>

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

function cn(...inputs: any[]) {
	return inputs.filter(Boolean).join(' ');
}

