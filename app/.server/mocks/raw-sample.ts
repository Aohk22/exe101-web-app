import type { Course, Lesson, Module } from '~/types.ts'

export const courses: Course[] = [
	{
		id: 1,
		title: 'Introduction to UI/UX Design',
		description: 'Learn the fundamentals of user interface and experience design.',
		instructor: 'Sarah Jenkins',
		thumbnail: 'https://picsum.photos/seed/design/800/600',
		// progress: 45,
		category: 'Design',
		length: '12h 30m',
		// lessonsCount: 24,
	},
	{
		id: 2,
		title: 'Advanced React Patterns',
		description: 'Master high-level React concepts and performance optimization.',
		instructor: 'David Chen',
		thumbnail: 'https://picsum.photos/seed/react/800/600',
		// progress: 12,
		category: 'Development',
		length: '18h 45m',
		// lessonsCount: 32,
	},
	{
		id: 3,
		title: 'Data Science with Python',
		description: 'A comprehensive guide to data analysis and machine learning.',
		instructor: 'Michael Ross',
		thumbnail: 'https://picsum.photos/seed/data/800/600',
		// progress: 0,
		category: 'Data Science',
		length: '25h 15m',
		// lessonsCount: 48,
	},
	{
		id: 4,
		title: 'Digital Marketing Essentials',
		description: 'Boost your brand with modern digital marketing strategies.',
		instructor: 'Emma Wilson',
		thumbnail: 'https://picsum.photos/seed/marketing/800/600',
		// progress: 85,
		category: 'Business',
		length: '10h 00m',
		// lessonsCount: 15,
	},
]

export const modules: Module[] = [
	{
		id: 1,
		title: "Getting Started",
		courseId: 1,
	},
	{
		id: 2,
		title: "Core Fundamentals",
		courseId: 1,
	},
	{
		id: 3,
		title: "Advanced Techniques",
		courseId: 1,
	},
]

export const lessons: Lesson[] = [
	{
		id: 1,
		title: "Course Overview",
		length: 300,
		moduleId: 1,
	},
	{
		id: 2,
		title: "Setting up your environment",
		length: 750,
		moduleId: 1,
	},
	{
		id: 3,
		title: "Basic Concepts",
		length: 945,
		moduleId: 1,
	},

	{
		id: 4,
		title: "Understanding the Architecture",
		length: 1200,
		moduleId: 2,
	},
	{
		id: 5,
		title: "Working with Data",
		length: 1515,
		moduleId: 2,
	},
	{
		id: 6,
		title: "Quiz: Fundamentals",
		length: 600,
		moduleId: 2,
	},

	{
		id: 7,
		title: "Optimization Strategies",
		length: 1110,
		moduleId: 3,
	},
	{
		id: 8,
		title: "Real-world Applications",
		length: 1800,
		moduleId: 3,
	},
]

export const usersToLessons = [
	{ usersId: 1, lessonId: 1, completed: true },
	{ usersId: 1, lessonId: 2, completed: true },
	{ usersId: 1, lessonId: 3, completed: false },

	{ usersId: 2, lessonId: 1, completed: true },
	{ usersId: 2, lessonId: 2, completed: false },
	{ usersId: 2, lessonId: 4, completed: false },

	{ usersId: 3, lessonId: 1, completed: false },
	{ usersId: 3, lessonId: 5, completed: true },
];
