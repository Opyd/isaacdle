import items from '/public/items.json'

function getRandomItem() {
	return items[Math.floor(Math.random() * items.length)];
}

export default getRandomItem;