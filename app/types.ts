import type { LucideIcon } from "lucide-react";
import {
	users,
	reviews,
	courses,
	modules,
	lessons,
	usersToLessons,
} from '~/.server/db/schema'

export type User = typeof users.$inferSelect
export type Course = typeof courses.$inferSelect
export type Module = typeof modules.$inferSelect
export type Lesson = typeof lessons.$inferSelect
export type Review = typeof reviews.$inferSelect
export type UsersToLessons = typeof usersToLessons.$inferSelect

export interface NavItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

