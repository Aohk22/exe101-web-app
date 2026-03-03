import type { Course } from './types.ts'

const courses: Course[] = [
	{
		id: '1',
		title: 'Introduction to UI/UX Design',
		description: 'Learn the fundamentals of user interface and experience design.',
		instructor: 'Sarah Jenkins',
		thumbnail: 'https://picsum.photos/seed/design/800/600',
		progress: 45,
		category: 'Design',
		duration: '12h 30m',
		lessonsCount: 24,
	},
	{
		id: '2',
		title: 'Advanced React Patterns',
		description: 'Master high-level React concepts and performance optimization.',
		instructor: 'David Chen',
		thumbnail: 'https://picsum.photos/seed/react/800/600',
		progress: 12,
		category: 'Development',
		duration: '18h 45m',
		lessonsCount: 32,
	},
	{
		id: '3',
		title: 'Data Science with Python',
		description: 'A comprehensive guide to data analysis and machine learning.',
		instructor: 'Michael Ross',
		thumbnail: 'https://picsum.photos/seed/data/800/600',
		progress: 0,
		category: 'Data Science',
		duration: '25h 15m',
		lessonsCount: 48,
	},
	{
		id: '4',
		title: 'Digital Marketing Essentials',
		description: 'Boost your brand with modern digital marketing strategies.',
		instructor: 'Emma Wilson',
		thumbnail: 'https://picsum.photos/seed/marketing/800/600',
		progress: 85,
		category: 'Business',
		duration: '10h 00m',
		lessonsCount: 15,
	},
];

export function getCourses(): Course[] {
	return courses
}
