import {Card, CardFooter} from "@nextui-org/react";
import Image from "next/image";


export default function Item({ item }) {

	return (
		<>
			<Card
				radius="lg"
				className="border-none"
				isFooterBlurred
			>
				{item && item?.img ? (
						<Image width={200} height={200} src={`/items/${item.itemId}.png`} alt={item.title} />
				) : (
					<p className="text-8xl w-[200px] h-[200px] blur-md text-center p-8">
						?
					</p>
				)}
				<CardFooter
					className="justify-center h-[42px] before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p className="text-tiny text-white/80">
						{item ? item.title : 'What could it be?'}
					</p>
				</CardFooter>
			</Card>
		</>
	)
}