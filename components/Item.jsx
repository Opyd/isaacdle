import {Card, CardFooter} from "@nextui-org/react";


export default function Item({itemGuessed}) {

	return (
		<>
			<Card
				radius="lg"
				className="border-none"
			>
				<p className="text-8xl w-[200px] h-[200px] blur-md text-center p-8">
					{ itemGuessed ? null : '?' }
				</p>
				<CardFooter className="justify-center h-[42px] before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p className="text-tiny text-white/80">
						{itemGuessed ? null : 'What it could be?'}
					</p>
				</CardFooter>
			</Card>
		</>
	)
}