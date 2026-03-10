export default function StatCard({
	label, value, icon, bg
}: {
	label: String,
	value: String,
	icon: React.ReactElement,
	bg: String
}) {
	return (
		<div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
			<div className={bg + " w-10 h-10 rounded-xl flex items-center justify-center mb-4"}>
				{icon}
			</div>
			<p className="text-neutral-500 text-sm font-medium">{label}</p>
			<p className="text-2xl font-bold text-neutral-900 mt-1">{value}</p>
		</div>
	)
}
