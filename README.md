
# isaacdle

A [Wordle](https://en.wikipedia.org/wiki/Wordle)-like game that allows you to test your knowledge of items from The Binding of Isaac Rebirth game, including all DLC.




## Deployment

To deploy this project run

```bash
  npm run dev
```

## Updating items

To update items, run a script that scrapes item data from the [tboi.com](https://tboi.com/) website.


Go to the scraper directory
```bash
  cd scraper
```

Run the script (script will replace current items.json file!)
```bash
  node scraper.js
```
## Tech Stack

**Client:** React, TailwindCSS, NextUI, react-window, js-confetti

**Server:** Next.js
**Scraper:** Cheerio, Axios
 
