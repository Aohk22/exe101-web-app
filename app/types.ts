import type { LucideIcon } from "lucide-react";

export interface Course {
	id: string;
	title: string;
	description: string;
	instructor: string;
	thumbnail: string;
	progress: number;
	category: string;
	duration: string;
	lessonsCount: number;
}

export interface Lesson {
	id: string;
	title: string;
	duration: string;
	completed: boolean;
	type: 'video' | 'text' | 'quiz';
}

export interface Module {
	id: string;
	title: string;
	lessons: Lesson[];
}

export interface NavItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

