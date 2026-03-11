import { sql } from 'drizzle-orm'
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type { SeederI } from '~/.server/db/seeder'

export class PgSeeder implements SeederI {
	private db: NodePgDatabase

	constructor(db: NodePgDatabase) {
		this.db = db
	}

	async insertUsers() {
		await this.db.execute(sql`
	INSERT INTO users (name, email) VALUES
	('Alice Nguyen', 'alice@example.com'),
	('Bob Tran', 'bob@example.com'),
	('Charlie Pham', 'charlie@example.com');
	`);
	}

	async insertCourses() {
		await this.db.execute(sql`
	INSERT INTO courses (title, description, instructor, thumbnail, category, length) VALUES
	('Intro to Web Security', 'Learn web security basics', 'Dr. Smith', '/img/security.png', 'Security', '4h'),
	('React Fundamentals', 'Learn React from scratch', 'Jane Doe', '/img/react.png', 'Development', '6h');
	`);
	}

	async insertModules() {
		await this.db.execute(sql`
	INSERT INTO module (title, course_id) VALUES
	('Introduction', 1),
	('XSS Attacks', 1),
	('React Basics', 2),
	('State Management', 2);
	`);
	}

	async insertLessons() {
		await this.db.execute(sql`
	INSERT INTO lesson (title, length, module_id) VALUES
	('What is Web Security', 10, 1),
	('Common Vulnerabilities', 15, 1),

	('Reflected XSS', 12, 2),
	('Stored XSS', 14, 2),

	('JSX and Components', 20, 3),
	('Props and State', 18, 3),

	('useState Hook', 16, 4),
	('useEffect Hook', 22, 4);
	`);
	}

	async insertEnrollment() {
		await this.db.execute(sql`
	INSERT INTO users_to_courses (user_id, course_id) VALUES
	(1, 1),
	(1, 2),
	(2, 1),
	(3, 2);
	`);
	}

	async insertProgress() {
		await this.db.execute(sql`
	INSERT INTO users_to_lessons (user_id, lesson_id, completed) VALUES
	(1, 1, true),
	(1, 2, true),
	(1, 3, false),

	(2, 1, true),
	(2, 2, false),

	(3, 5, true);
	`);
	}

	async insertReviews() {
		await this.db.execute(sql`
	INSERT INTO reviews (user_id, course_id, content, rating) VALUES
	(1, 1, 'Great intro to security', 5),
	(2, 1, 'Very helpful examples', 4),
	(3, 2, 'React explained clearly', 5);
	`);
	}

	async run(): Promise<void> {
		try {
			await this.insertUsers()
			await this.insertCourses()
			await this.insertModules()
			await this.insertLessons()
			await this.insertEnrollment()
			await this.insertProgress()
			await this.insertReviews()
		} catch (error) {
			console.error("Seeding failed:", error)
			throw error
		}
	}
}
