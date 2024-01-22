import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import InvalidGuessItem from "@/components/InvalidGuessItem";


export default function GuessList({ invalidGuesses, targetItem }) {

	const reversedGuesses = [...invalidGuesses].reverse();

	return (
		<>
			<Card>
				<CardHeader className="flex justify-center uppercase font-bold text-2xl">
					Guesses ({reversedGuesses.length})
				</CardHeader>
				<Divider />
				<CardBody className="text-center max-h-[80dvh] overflow-y-auto">
					<div className="flex flex-col-reverse gap-y-2">
						{reversedGuesses.length === 0 ? (
							<i className="text-gray-400">No guesses yet.</i>
						) : reversedGuesses.reverse().map(item => {return (
							<InvalidGuessItem key={item.itemId} targetItem={targetItem} guessItem={item} />
						)})}
					</div>
				</CardBody>
			</Card>
		</>
	)
}