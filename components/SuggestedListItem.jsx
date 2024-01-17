import {Avatar, Button} from "@nextui-org/react";


export default function SuggestedListItem({item, clickedItem}) {
	return (
		<Button key={item.itemId} onClick={clickedItem} className="flex items-center justify-start w-[400px] text-left gap-2">
			{item.img === undefined ? (
				<Avatar
					name="?"
					size="md"
				/>
			) : (
				<Avatar
					alt={item.title}
					className="flex-shrink-0"
					size="md"
					src={`/items/${item.itemId}.png`}
				/>
			)}
			<div className="flex flex-col">
				<span>{item.title}</span>
			</div>
		</Button>
	)
}