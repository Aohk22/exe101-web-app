import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router";
import type { Course, Lesson } from "~/types";

export default function CourseCard({
	course, lessonCount
}: {
	course: Course,
	lessonCount: number,
}) {
	return (
		<Link
			key={course.id}
			to={`/courses/${course.id}`}
			className="group flex flex-col bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
		>
			<div className="aspect-[16/10] overflow-hidden relative">
				<img
					src={course.thumbnail}
					alt={course.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
					referrerPolicy="no-referrer"
				/>
				<div className="absolute top-4 left-4">
					<span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg">
						{course.category}
					</span>
				</div>
			</div>

			<div className="p-6 flex-1 flex flex-col">
				<div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
					<div className="flex items-center gap-1">
						<Clock className="w-3 h-3" />
						{course.length}
					</div>
					<div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
					<div className="flex items-center gap-1">
						<BookOpen className="w-3 h-3" />
						{lessonCount} lessons
					</div>
				</div>

				<h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
					{course.title}
				</h3>

				<p className="text-sm text-neutral-500 line-clamp-2 mb-6">
					{course.description}
				</p>

				<div className="mt-auto pt-4 border-t border-neutral-50 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
							<img
								src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`}
								alt={course.instructor}
								className="w-full h-full object-cover"
							/>
						</div>
						<span className="text-xs text-neutral-600 font-medium">{course.instructor}</span>
					</div>
					<div className="text-indigo-600 group-hover:translate-x-1 transition-transform">
						<ChevronRight className="w-5 h-5" />
					</div>
				</div>
			</div>
		</Link>
	)
}
