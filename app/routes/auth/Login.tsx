import React, { useState } from 'react'
import { Mail, ArrowRight, Loader2, KeyRound } from 'lucide-react'
import { Link } from 'react-router'
import OauthProviders from '~/components/OauthProviders'
import InputField from '~/components/InputField'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	// TODO: handle login logic
	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault()
		setIsLoading(true)
		// Simulation of login
		setTimeout(() => setIsLoading(false), 1500)
	}

	return (
		<>
			<div className="bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 p-8 md:p-12" >
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-neutral-900">Welcome Back</h2>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<InputField value={email} setter={setEmail} icon=<Mail /> label="Email Address" placeholder="name@domain.com" />
					<InputField value={password} setter={setPassword} icon=<KeyRound /> label="Password" placeholder="password" />
					<button type="button" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
						Forgot Password?
					</button>

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

					{/* TODO: implement OAUTH */}
					<OauthProviders />
				</div>
			</div >

			<p className="mt-8 text-center text-neutral-500 font-medium">
				Don't have an account? {' '}
				<Link to="/register" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
					Sign up for free
				</Link>
			</p>
		</>
	)
}

