# Schema

Required entities: user, course, module, lesson, review.

Refer to [./app/.server/db/schema.ts](drizzle schema code).

# Requirements

## Data

User **enrolls** to course.

User **unenrolls** from course.

User **has** course progress.

User **makes** a review.

Course **contains** modules.

Course **has** a review.

Module **contains** lessons.

## For webapp

- Role based access.
- Authentication.

- Drop down.
- Text search.

- Progress tracking.

