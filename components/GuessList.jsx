import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import InvalidGuessItem from "@/components/InvalidGuessItem";


export default function GuessList({ invalidGuesses, targetItem }) {

	return (
		<>
			<Card>
				<CardHeader className="flex justify-center uppercase font-bold text-2xl">
					Guesses
				</CardHeader>
				<Divider />
				<CardBody className="text-center flex flex-col-reverse gap-y-2">
					{invalidGuesses.length === 0 ? (
						<i className="text-gray-400">No guesses yet.</i>
					) : invalidGuesses.map(item => {return (
						<InvalidGuessItem key={item.itemId} targetItem={targetItem} guessItem={item} />
					)})}
				</CardBody>
			</Card>
		</>
	)
}