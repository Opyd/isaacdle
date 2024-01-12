import items from '/public/items.json';
import {Avatar, Button} from "@nextui-org/react";
import { FixedSizeList as List } from 'react-window';
import {useState} from "react";

export default function SuggestedItemsList() {

	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
	};


	const Option = ({ index, style }) => (
		<div style={style}>
			<Button key={items[index].itemId} className="flex items-center justify-start w-[400px] text-left gap-2">
				{items[index].img === undefined ? (
					<Avatar
						name="?"
						size="md"
					/>
				) : (
					<Avatar
						alt={items[index].title}
						className="flex-shrink-0"
						size="md"
						src={`/items/${items[index].itemId}.png`}
					/>
				)}
				<div className="flex flex-col">
					<span>{items[index].title}</span>
				</div>
			</Button>
		</div>
	);

	return (
		<>
			{selectedOption?.title}
			<List
				height={300}
				itemCount={items.length}
				itemSize={50}
				width={420}
				style={{ overflowX: 'hidden', scrollbarWidth: 'thin', scrollbarColor: 'darkgray lightgray' }}
			>
				{Option}
			</List>
		</>
	)
}