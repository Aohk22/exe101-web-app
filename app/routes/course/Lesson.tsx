import { useParams, Link, useLoaderData } from 'react-router'
import type { LoaderFunctionArgs } from 'react-router'
import { ChevronLeft, CheckCircle2, MessageSquare, FileText, Play, Settings, Maximize2, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { courseService } from '~/.server/container/services';
import type { Course } from '~/types';

export async function loader({ params }: LoaderFunctionArgs) {
	const courseId = Number(params.courseId)
	const lessonId = Number(params.lessonId)
	const course = courseService.getCourse(courseId)
	const lesson = courseService.getCourse(lessonId)
	return { course }
}

export default function Lesson() {
	const [activeTab, setActiveTab] = useState('overview');
	const { course } = useLoaderData() as { course: Course }

	return (
		<div className="flex flex-col h-[calc(100vh-120px)]">

			{/* Header */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-4">
					<Link
						to={`/courses/${course.id}`}
						className="p-2 hover:bg-neutral-200 rounded-full transition-colors"
					>
						<ChevronLeft className="w-6 h-6" />
					</Link>
					<div>
						<p className="text-sm text-neutral-500">{course.title}</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<button className="px-4 py-2 border border-neutral-200 rounded-xl text-sm font-medium hover:bg-neutral-50 transition-colors">
						Previous
					</button>
					<button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors">
						Next Lesson
					</button>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-0">
				<div className="lg:col-span-3 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-thin">
					{/* Tabs */}
					<div className="space-y-6">
						<div className="prose prose-neutral max-w-none">
							<h1>Hello World</h1>
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div className="lg:col-span-1 flex flex-col bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm min-h-0">
					<div className="p-5 border-b border-neutral-100 bg-neutral-50/50">
						<h3 className="font-bold text-neutral-900">Course Content</h3>
						<div className="flex items-center justify-between mt-1">
							<p className="text-xs text-neutral-500">{'<completion_status>'}</p>
							<span className="text-xs font-bold text-indigo-600">{'<percent>'}</span>
						</div>
						<div className="h-1.5 w-full bg-neutral-200 rounded-full mt-2 overflow-hidden">
							<div className="h-full w-1/2 bg-indigo-600 rounded-full"></div>
						</div>
					</div>

					<div className="flex-1 overflow-y-auto scrollbar-thin">
						Second part
					</div>
				</div>
			</div>
		</div >
	);
}

