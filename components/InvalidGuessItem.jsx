import {Avatar, Chip} from "@nextui-org/react";

function arrayEquals(a, b) {
	return Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index]);
}
function findCommonElements(arr1, arr2) {
	return arr1.some(item => arr2.includes(item))
}

const setNames = {
	'afterbirth_plus' : 'AB+',
	'rebirth' : 'BASE',
	'repentance' : 'REP',
	'afterbirth' : 'AB'
}

const poolIcons = {
	'shop' : '🛒',
	'greed mode shop' : '🪙',
	'boss room' : '💀',
	'gold/stone chest' : '🧰',
	'item room' : '👑',
	'angel room' : '👼',
	'devil room' : '👿',
	'secret room' : '❓',
	'challenge room' : '⭐',
	'crane game': '🎰',
	'library' : '📚'
}

export default function InvalidGuessItem({ guessItem, targetItem }) {


	const setMatches = guessItem.set === targetItem.set;
	const typeMatches = guessItem.type === targetItem.type;
	const qualityMatches = guessItem.quality === targetItem.quality;
	const poolMatches = arrayEquals(guessItem.itemPool, targetItem.itemPool);
	let poolPartialMatches = false;
	if (!poolMatches) {
		poolPartialMatches = findCommonElements(guessItem.itemPool, targetItem.itemPool)
	}

	return (
		<div className="px-2 py-4 border rounded-[10px] border-white/20">
			<div className="grid grid-cols-5 pb-2 gap-x-2 items-center">
				<p className="text-ellipsis break-all line-clamp-1">{guessItem.title}</p>
				<Chip classNames={{content: 'w-[100px]'}}>Set</Chip>
				<Chip classNames={{content: 'w-[100px]'}}>Type</Chip>
				<Chip classNames={{content: 'w-[100px]'}}>Quality</Chip>
				<Chip classNames={{content: 'w-[100px]'}}>Pool</Chip>
			</div>
			<div className="grid grid-cols-5 gap-x-2 items-center">
				<div className='w-full flex items-center justify-center'>
					<Avatar src={`/items/${guessItem.itemId}.png`}/>
				</div>
				<div
					className={`w-full text-sm h-[50px] rounded-[10px] grid place-items-center ${setMatches ? 'bg-green-600' : 'bg-red-600'}`}>
					{setNames[guessItem.set]}
				</div>
				<div
					className={`w-full text-sm h-[50px] rounded-[10px] grid place-items-center ${typeMatches ? 'bg-green-600' : 'bg-red-600'}`}>
					{guessItem.type}
				</div>
				<div
					className={`w-full text-sm h-[50px] rounded-[10px] grid place-items-center ${qualityMatches ? 'bg-green-600' : 'bg-red-600'}`}>
					{guessItem.quality}
				</div>
				<div
					className={`w-full  text-sm h-[50px] rounded-[10px] flex flex-wrap gap-x-1 gap-y-1 items-center justify-center ${poolMatches ? 'bg-green-600' : poolPartialMatches ? 'bg-amber-400' : 'bg-red-600'}`}>
					{guessItem.itemPool.map(pool => {
						return (
						<div className="bg-[#3f3f46] border-white/20 rounded-[5px]" key={pool}>
							<p>{poolIcons[pool.toLowerCase()] ?? pool.split(' ')[0]}</p>
						</div>
					)
					})}
				</div>
			</div>
		</div>
	)
}