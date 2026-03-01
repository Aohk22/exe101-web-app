import { Outlet } from "react-router";
import { authMiddleware } from "~/middleware/auth";
import { userContext } from "~/context";
import type { Route } from "./+types/Protected";

export const middleware: Route.MiddlewareFunction[] = [authMiddleware]

// force middleware for every client-side navigation
export async function loader({ context }: Route.LoaderArgs) {
	const user = context.get(userContext)
	return user
}

export default function Protected() {
	return <Outlet />
}
