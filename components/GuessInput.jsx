import {Button, Input} from "@nextui-org/react";
import SuggestedItemsList from "@/components/SuggestedItemsList";
import {useEffect, useState} from "react";

export default function GuessInput({ setGuessedItem }) {

	const [queryStr, setQueryStr] = useState('');

	function changeQueryStr(value) {
		setQueryStr(value);
	}

	function setGuess(item) {
		setGuessedItem(item);
	}

	return (
		<>
			<div className="flex flex-col gap-y-10">
				<Input type="text" onValueChange={changeQueryStr} />
				<SuggestedItemsList setGuess={setGuess} queryString={queryStr} />
			</div>
		</>
	)
}