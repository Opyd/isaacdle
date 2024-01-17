import { Input } from "@nextui-org/react";
import SuggestedItemsList from "@/components/SuggestedItemsList";
import {useState} from "react";

export default function GuessInput() {

	const [queryStr, setQueryStr] = useState('');

	return (
		<>
			<div className="flex flex-col gap-y-10">
				<Input type="text" onValueChange={setQueryStr} />
				<SuggestedItemsList queryString={queryStr} />
			</div>
		</>
	)
}