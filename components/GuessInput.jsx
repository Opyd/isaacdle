import {Button, Input} from "@nextui-org/react";
import SuggestedItemsList from "@/components/SuggestedItemsList";
import {useEffect, useState} from "react";

export default function GuessInput({ setGuessedItem, searchPhrase, onPhraseChange, isSmallScreen }) {

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
			<div className="flex flex-col gap-y-10 w-full">
				<Input placeholder="Guess here..." type="text" className="w-full" value={searchPhrase} onValueChange={changeQueryStr} />
				{ isSmallScreen && searchPhrase.length !== 0 || !isSmallScreen ? (
					<SuggestedItemsList setGuess={setGuess} queryString={queryStr} />
				) : null }
			</div>
		</>
	)
}