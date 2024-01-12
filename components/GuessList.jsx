import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";


export default function GuessList() {





	return (
		<>
			<Card>
				<CardHeader className="flex justify-center uppercase font-bold text-2xl">
					Guesses
				</CardHeader>
				<Divider />
				<CardBody className="text-center">
					<i>No guesses yet.</i>
				</CardBody>
			</Card>
		</>
	)
}