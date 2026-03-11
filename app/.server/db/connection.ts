import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { PgSeeder } from '~/.server/mocks/database-sample'

export const db = drizzle(process.env.DATABASE_URL!)

if (process.env.NODE_ENV! == 'DEV') {
	const seeder = new PgSeeder(db)
	seeder.run()
}

