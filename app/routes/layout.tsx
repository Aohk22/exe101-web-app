import { Outlet, Link, useLocation, useRouteLoaderData } from 'react-router'
import { LayoutDashboard, BookOpen, GraduationCap, Settings, Bell, Search, User } from 'lucide-react'
import { motion } from 'motion/react'

const navItems = [
	{ label: 'Dashboard', href: '/', icon: LayoutDashboard },
	{ label: 'My Courses', href: '/courses', icon: BookOpen },
	{ label: 'Achievements', href: '/achievements', icon: GraduationCap },
	{ label: 'Settings', href: '/settings', icon: Settings },
];

function Sidebar() {
	const location = useLocation()
	const user = useRouteLoaderData('routes/protected')
	return (
		<aside className="w-64 border-r border-neutral-200 bg-white hidden md:flex flex-col sticky top-0 h-screen">
			<div className="p-6">
				<Link to="/" className="flex items-center gap-2">
					<span className="font-bold text-xl tracking-tight">CyberSpace Academy</span>
				</Link>
			</div>

			<nav className="flex-1 px-4 py-6 space-y-6 bg-white border-r border-neutral-200">
				{navItems.map((item) => {
					const isActive = location.pathname === item.href;
					return (
						<Link
							key={item.href}
							to={item.href}
							className={
								"flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors " +
								(isActive
									? "bg-indigo-50 text-indigo-600"
									: "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900")
							}
						>
							<item.icon className="w-5 h-5" />
							{item.label}
						</Link>
					);
				})}
			</nav>

			<div className="p-4 border-t border-neutral-100">
				<div className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer">
					<p>{'<user_icon>'}</p>
					{/*
					<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden">
					</div>*/}
					<div className="flex-1 min-w-0">
						{/* TODO: correct user type */}
						<p className="text-sm font-medium text-neutral-900 truncate">{user}</p>
						<p className="text-xs text-neutral-500 truncate">{'<user_type>'}</p>
					</div>
				</div>
			</div>
		</aside>
	)
}

function Main() {
	return (
		<main className="flex-1 flex flex-col min-w-0" >
			{/* Header */}
			< header className="h-16 border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-6 flex items-center justify-between" >
				<div className="flex-1 max-w-md relative">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
					<input
						type="text"
						placeholder="Search courses, lessons..."
						className="w-full pl-10 pr-4 py-2 bg-neutral-100 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
					/>
				</div>

				<div className="flex items-center gap-4">
					<button className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition-colors relative">
						<Bell className="w-5 h-5" />
						<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
					</button>
					<div className="h-8 w-px bg-neutral-200 mx-2"></div>
					<button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors">
						Upgrade to Pro
					</button>
				</div>
			</header >

			{/* Page Content */}
			< div className="p-6 md:p-10 max-w-7xl w-full mx-auto" >
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Outlet />
				</motion.div>
			</div >
		</main >
	)
}

export default function MainLayout() {
	return (
		<div className="flex min-h-screen bg-neutral-50">
			<Sidebar />
			<Main />
		</div >
	)
}

