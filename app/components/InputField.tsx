import type { Dispatch, SetStateAction } from "react";

export default function InputField<T>({
	value, setter, label, placeholder, icon
}: {
	value: T
	setter: Dispatch<SetStateAction<T>>
	label: string
	placeholder: string
	icon: React.ReactElement
}) {
	return (
		<div className="space-y-2">
			<label className="text-sm font-bold text-neutral-700 ml-1">{label}</label>
			<div className="relative group">
				<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-indigo-600 transition-colors">
					{icon}
				</span>
				<input
					type="text"
					required
					value={String(value)}
					onChange={(e) => setter(e.target.value as T)}
					placeholder={placeholder}
					className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition"
				/>
			</div>
		</div>
	)
}
