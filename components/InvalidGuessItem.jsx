import {Avatar, Chip} from "@nextui-org/react";
import Image from "next/image";

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
	'shop' : 'shop.png',
	'greed mode shop' : 'shop.png',
	'boss room' : 'boss-room.png',
	'greed mode item room' : 'treasure-room.png',
	'gold/stone chest' : 'gold-stone-chest.webp',
	'gold chest' : 'gold-stone-chest.webp',
	'item room' : 'treasure-room.png',
	'angel room' : 'angel-room.png',
	'devil room' : 'devil-room.png',
	'secret room' : 'secret-room.webp',
	'challenge room' : 'boss-rush.png',
	'crane game': 'crane-game.png',
	'library' : 'library.png',
	'battery beggar': 'battery_bum.png',
	'demon beggar' : 'devil_beggar.webp',
	'bomb beggar' : 'battery_bum.png',
	'curse room' : 'curse-room.webp',
	'key beggar' : 'key_beggar.webp',
	'old chest' : 'old_chest.png',
	'planetarium' : 'planetarium.png',
	'red chest' : 'red_chest.webp',
	'rotten beggar' : 'rotten-beggar.png',
	'none (arcade shell game only)' : 'shell-game.png',
	'ultra secret room' : 'ultra-secret-room.png',
	'wooden chest' : 'wooden-chest.png',
	'mom\'s chest' : 'moms-chest.webp'
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
				<p className="text-ellipsis break-all text-xs line-clamp-1">{guessItem.title}</p>
				<Chip classNames={{content: 'w-[100px] break-all line-clamp-1 text-xs xl:text-base'}}>Set</Chip>
				<Chip classNames={{content: 'w-[100px] break-all line-clamp-1 text-xs xl:text-base'}}>Type</Chip>
				<Chip classNames={{content: 'w-[100px] break-all line-clamp-1 text-xs xl:text-base'}}>Quality</Chip>
				<Chip classNames={{content: 'w-[100px] break-all line-clamp-1 text-xs xl:text-base'}}>Pool</Chip>
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
					className={`w-full text-sm rounded-[10px] flex flex-wrap gap-x-1 gap-y-1 items-center justify-center h-[50px] ${poolMatches ? 'bg-green-600' : poolPartialMatches ? 'bg-amber-400' : 'bg-red-600'}`}>
					{guessItem.itemPool.map(pool => {
						return (
						<div className="bg-[#3f3f46] border-white/20 rounded-[5px]" key={pool}>
							<Image src={`/pools/${poolIcons[pool.toLowerCase()]}`} width={20} height={20} className="w-[15px] h-[15px]  xl:w-[20px] xl:h-[20px]" alt={pool} />
						</div>
					)
					})}
				</div>
			</div>
		</div>
	)
}