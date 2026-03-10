import { siGithub, siGooglechrome } from 'simple-icons'

export default function OauthProviders() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<button type='submit' className="flex items-center justify-center gap-2 py-3 border 
							border-neutral-200 rounded-xl text-sm font-bold text-neutral-700 
							hover:bg-neutral-200 transition-colors">
				<img height="32" width="32" src={`https://cdn.simpleicons.org/${siGooglechrome.slug}/grey`} />
			</button>
			<button type='submit' className="flex items-center justify-center gap-2 py-3 border 
							border-neutral-200 rounded-xl text-sm font-bold text-neutral-700 
							hover:bg-neutral-200 transition-colors">
				<img height="32" width="32" src={`https://cdn.simpleicons.org/${siGithub.slug}/grey`} />
			</button>
		</div>
	)
}
