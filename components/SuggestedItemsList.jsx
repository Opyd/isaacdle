import items from '/public/items.json';
import { FixedSizeList as List } from 'react-window';
import {useState} from "react";
import SuggestedListItem from './SuggestedListItem'

export default function SuggestedItemsList({ queryString, setGuess }) {

	const [selectedOption, setSelectedOption] = useState(null);

	let filteredItems = items;

	if (queryString !== '') {
		filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(queryString.toLowerCase()));
	}

	const handleSelect = (option) => {
		setSelectedOption(option);
		setGuess(option);
	};


	const Option = ({ index, style }) => (
		<div style={style}>
			<SuggestedListItem clickedItem={() => {handleSelect(filteredItems[index])}} item={filteredItems[index]} />
		</div>
	);

	return (
		<>
			<List
				height={300}
				itemCount={filteredItems.length}
				itemSize={50}
				width={420}
				style={{ overflowX: 'hidden', scrollbarWidth: 'thin', scrollbarColor: 'darkgray lightgray' }}
			>
				{Option}
			</List>
		</>
	)
}