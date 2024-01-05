const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const download = require('image-downloader');
const {resolve} = require("path");

const items = [];

function saveItemsToJSON(items) {
	const jsonString = JSON.stringify(items, null, 2);
	const filePath = 'public/items.json';
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	}
	fs.writeFile(filePath, jsonString, (err) => {
		if (err) {
			console.error('Error writing JSON file:', err);
		} else {
			console.log('JSON file has been saved successfully.');
		}
	});
}

function downloadItemsImg(items) {
	for (const item of items) {
		let options = {
			url: item.img,
			dest: resolve(__dirname,`../public/items/${item.itemId}.png`),
		};
		download.image(options)
			.then(({ filename }) => {
				console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
			})
			.catch((err) => console.error(err));
	}
}

function extractData(el, $, $fan, set) {
	const span = $(el).children('a').children('span');
	const meta = $(span).children('ul');

	const title = span.children('.item-title').text();
	const itemId = +span.children('.r-itemid').text().split(' ').slice(-1).pop();
	const pickup = span.children('.pickup').text();
	const quality = +span.children('.quality').text().split(' ').slice(-1).pop();
	const type = meta.children().first().text().split(' ').slice(-1).pop();
	const recharge = type.includes('Active') ? meta.children('ul p:nth-child(2)').text() : false;
	let img = $fan(`a[title^="${title}"]`).children().first().attr('data-src');
	img = img?.split('/').slice(0, -2).join('/');
	let itemPool = recharge ? meta.children('ul p:nth-child(3)').text() : meta.children('ul p:nth-child(2)').text();

	itemPool = itemPool.slice(11).split(',').map(text => text.trim());
	items.push({
		set, title, itemId, type, pickup, quality, itemPool, recharge, img
	})
}


async function scrape() {
	try {
		const {data} = await axios.get('https://tboi.com');
		let data_fandom = await axios.get('https://bindingofisaacrebirth.fandom.com/wiki/Items');
		data_fandom = data_fandom.data;
		const $ = cheerio.load(data);
		const $fan = cheerio.load(data_fandom);

		let repItems = $('.repentanceitems-container').first();
		repItems = repItems.children('li');
		let rebirthItems = $('#itmlist li');
		let afterbirthItems = $('body > div.main > div.afterbirthitems-container.rebirth > li');
		let afterbirthPlusItems = $('body > div.main > div.afterbirthplusitems-container.rebirth > li');

		repItems.each((idx, el) => {
			extractData(el, $, $fan, 'repentance');
		})
		rebirthItems.each((idx, el) => {
			extractData(el, $, $fan, 'rebirth');
		})
		afterbirthItems.each((idx, el) => {
			extractData(el, $, $fan, 'afterbirth');
		})
		afterbirthPlusItems.each((idx, el) => {
			extractData(el, $, $fan, 'afterbirth_plus');
		})
		saveItemsToJSON(items);
		downloadItemsImg(items);
	} catch (err) {
		console.error(err);
	}
}

scrape();