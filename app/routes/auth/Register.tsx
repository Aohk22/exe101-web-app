import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, CheckCircle2, UserSquare, KeyRound } from 'lucide-react';
import { Link } from 'react-router';
import OauthProviders from '~/components/OauthProviders';
import InputField from '~/components/InputField';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	// TODO: handle registration logic
	const handleSubmit = (e: React.SubmitEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulation of registration
		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true);
		}, 1500);
	};

	if (isSuccess) {
		return (
			<div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 p-12 text-center">
				<div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
					<CheckCircle2 className="w-10 h-10 text-emerald-500" />
				</div>
				<h2 className="text-2xl font-bold text-neutral-900 mb-2">Account Created!</h2>
				<p className="text-neutral-500 mb-8">Your learning journey starts now. Welcome to Cyberspace Academy.</p>
				<Link
					to="/login"
					className="inline-flex items-center justify-center w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
				>
					Go to Login
				</Link>
			</div>
		);
	}

	return (
		<>
			{/* Register Card */}
			<div className="bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 p-8 md:p-12">
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-neutral-900">Create Account</h2>
				</div>

				<form onSubmit={handleSubmit} className="space-y-5">
					<InputField value={name} setter={setName} icon=<UserSquare /> label="Display name" placeholder="My Name" />
					<InputField value={email} setter={setEmail} icon=<Mail /> label="Email Address" placeholder="name@domain.com" />
					<InputField value={password} setter={setPassword} icon=<KeyRound /> label="Password" placeholder="password" />

					<div className="flex items-start gap-2 ml-1">
						<input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500" />
						<label htmlFor="terms" className="text-xs text-neutral-500 font-medium leading-relaxed">
							I agree to the <button type="button" className="text-indigo-600 font-bold">Terms of Service</button> and <button type="button" className="text-indigo-600 font-bold">Privacy Policy</button>.
						</label>
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
								Create Account <ArrowRight className="w-5 h-5" />
							</>
						)}
					</button>
				</form>

				<div className="mt-8">
					<div className="relative flex items-center justify-center mb-8">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-neutral-100"></div>
						</div>
						<span className="relative px-4 bg-white text-xs font-bold text-neutral-400 uppercase tracking-widest">Or sign up with</span>
					</div>

					<OauthProviders />
				</div>
			</div>

			<p className="mt-8 text-center text-neutral-500 font-medium">
				Already have an account? {' '}
				<Link to="/login" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
					Sign in
				</Link>
			</p>
		</>
	);
}

