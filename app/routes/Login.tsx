import React, { useState } from 'react'
import { GraduationCap, Mail, Lock, ArrowRight, Loader2, Github, Chrome } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		// Simulation of login
		setTimeout(() => setIsLoading(false), 1500)
	}

	return (
		<div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="max-w-md w-full"
			>
				{/* Logo Area */}
				<div className="flex flex-col items-center mb-10">
					<div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-indigo-200">
						<GraduationCap className="text-white w-8 h-8" />
					</div>
					<h1 className="text-3xl font-bold text-neutral-900 tracking-tight">Lumina Learning</h1>
					<p className="text-neutral-500 mt-2 font-medium">Empowering your future, one lesson at a time.</p>
				</div>

				{/* Login Card */}
				<div className="bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 p-8 md:p-12">
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-neutral-900">Welcome Back</h2>
						<p className="text-neutral-500 text-sm mt-1">Please enter your details to sign in.</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label className="text-sm font-bold text-neutral-700 ml-1">Email Address</label>
							<div className="relative group">
								<Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-indigo-600 transition-colors" />
								<input
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="name@company.com"
									className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between items-center ml-1">
								<label className="text-sm font-bold text-neutral-700">Password</label>
								<button type="button" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
									Forgot Password?
								</button>
							</div>
							<div className="relative group">
								<Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-indigo-600 transition-colors" />
								<input
									type="password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="••••••••"
									className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
								/>
							</div>
						</div>

						<div className="flex items-center gap-2 ml-1">
							<input type="checkbox" id="remember" className="w-4 h-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500" />
							<label htmlFor="remember" className="text-sm text-neutral-600 font-medium cursor-pointer">Remember for 30 days</label>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
						>
							{isLoading ? (
								<Loader2 className="w-5 h-5 animate-spin" />
							) : (
								<>
									Sign In <ArrowRight className="w-5 h-5" />
								</>
							)}
						</button>
					</form>

					<div className="mt-8">
						<div className="relative flex items-center justify-center mb-8">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-neutral-100"></div>
							</div>
							<span className="relative px-4 bg-white text-xs font-bold text-neutral-400 uppercase tracking-widest">Or continue with</span>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl text-sm font-bold text-neutral-700 hover:bg-neutral-50 transition-colors">
								<Chrome className="w-5 h-5" /> Google
							</button>
							<button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-xl text-sm font-bold text-neutral-700 hover:bg-neutral-50 transition-colors">
								<Github className="w-5 h-5" /> GitHub
							</button>
						</div>
					</div>
				</div>

				<p className="mt-8 text-center text-neutral-500 font-medium">
					Don't have an account? {' '}
					<Link to="/register" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
						Sign up for free
					</Link>
				</p>
			</motion.div>
		</div>
	)
}

