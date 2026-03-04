import type { Course, Lesson, Module } from '~/types.ts'

export const MOCK_COURSES: Course[] = [
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

export const MOCK_MODULES = [
	{
		id: 'm1',
		title: 'Getting Started',
		lessons: [
			{ id: 'l1', title: 'Course Overview', duration: '5:00', completed: true, type: 'video' } as Lesson,
			{ id: 'l2', title: 'Setting up your environment', duration: '12:30', completed: true, type: 'video' } as Lesson,
			{ id: 'l3', title: 'Basic Concepts', duration: '15:45', completed: false, type: 'video' } as Lesson,
		] as Lesson[]
	} as Module,
	{
		id: 'm2',
		title: 'Core Fundamentals',
		lessons: [
			{ id: 'l4', title: 'Understanding the Architecture', duration: '20:00', completed: false, type: 'video' } as Lesson,
			{ id: 'l5', title: 'Working with Data', duration: '25:15', completed: false, type: 'video' } as Lesson,
			{ id: 'l6', title: 'Quiz: Fundamentals', duration: '10:00', completed: false, type: 'quiz' } as Lesson,
		] as Lesson[]
	} as Module,
	{
		id: 'm3',
		title: 'Advanced Techniques',
		lessons: [
			{ id: 'l7', title: 'Optimization Strategies', duration: '18:30', completed: false, type: 'video' } as Lesson,
			{ id: 'l8', title: 'Real-world Applications', duration: '30:00', completed: false, type: 'video' } as Lesson,
		] as Lesson[]
	} as Module
];
