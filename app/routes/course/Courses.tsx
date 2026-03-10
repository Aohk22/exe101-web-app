import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { courseService } from '~/.server/container/services';
import CourseCard from '~/components/CourseCard';
import type { Course, Lesson } from '~/types';

export async function loader() {
	const courses = courseService.getCourses()
	const coursesWithLesson = courses.map(course => ({
		...course,
		lessons: courseService.getCourseLessons(course.id),
	}))
	return { coursesWithLesson }
}

export default function Courses() {
	const [activeCategory, setActiveCategory] = useState('All');
	const categories = ['All', 'Design', 'Development', 'Data Science', 'Business', 'Marketing'];
	const { coursesWithLesson } = useLoaderData() as {
		coursesWithLesson: (Course & { lessons: Lesson[] })[]
	}
	const courses = coursesWithLesson

	{/* TODO: figure out how to optimize database calls after every category switch */ }
	const filteredCourses = activeCategory === 'All'
		? courses
		: courses.filter(c => c.category === activeCategory);

	return (
		<div className="space-y-8">
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
				<div>
					<h1 className="text-3xl font-bold text-neutral-900">Explore Courses</h1>
					<p className="text-neutral-500 mt-1">Find the perfect course to advance your career.</p>
				</div>

				{/* TODO: implement searching functionality */}
				<div className="flex items-center gap-2">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
						<input
							type="text"
							placeholder="Search courses..."
							className="pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all w-full md:w-64"
						/>
					</div>
					<button className="p-2 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
						<Filter className="w-5 h-5 text-neutral-500" />
					</button>
				</div>
			</div>

			{/* Categories */}
			<div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setActiveCategory(cat)}
						className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
							? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
							: 'bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-300'
							}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Course Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredCourses.map((course) => {
					return (
						<CourseCard key={course.id} course={course} lessonCount={course.lessons.length} />
					)
				})}
			</div>
		</div>
	);
}

