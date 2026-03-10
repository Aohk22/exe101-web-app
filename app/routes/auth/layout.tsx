import { Outlet } from "react-router";

export default function() {
	return (
		<div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
			<div className="max-w-md w-full">
				{/* Logo Area */}
				<div className="flex flex-col items-center mb-10">
					{/* TODO: logo here */}
					<p>{'<logo>'}</p>
					<h1 className="text-3xl font-bold text-neutral-900 tracking-tight">CyberSpace Academy</h1>
					<p className="text-neutral-500 mt-2 font-medium">Empowering your future, one lesson at a time.</p>
				</div>

				<Outlet />
			</div>
		</div>
	)
}
