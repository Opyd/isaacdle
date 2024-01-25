import {Button, Input} from "@nextui-org/react";
import SuggestedItemsList from "@/components/SuggestedItemsList";
import {useEffect, useState} from "react";

export default function GuessInput({ setGuessedItem, searchPhrase, onPhraseChange }) {

	const [queryStr, setQueryStr] = useState('');

	useEffect(() => {
		setQueryStr(searchPhrase);
	}, [searchPhrase]);

	function changeQueryStr(value) {
		setQueryStr(value);
		onPhraseChange(value);
	}

	function setGuess(item) {
		setGuessedItem(item);
	}

	return (
		<>
			<div className="flex flex-col gap-y-10">
				<Input placeholder="Guess here..." type="text" value={searchPhrase} onValueChange={changeQueryStr} />
				<SuggestedItemsList setGuess={setGuess} queryString={queryStr} />
			</div>
		</>
	)
}