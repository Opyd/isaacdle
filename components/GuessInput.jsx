import items from '/public/items.json';
import {Avatar, Button, Input, Select, SelectItem} from "@nextui-org/react";
import { FixedSizeList as List } from 'react-window';
import {useState} from "react";
import SuggestedItemsList from "@/components/SuggestedItemsList";

export default function GuessInput() {


	return (
		<>
			<div className="flex flex-col gap-y-10">
				<Input type="text"></Input>
				<SuggestedItemsList />
			</div>
		</>
	)
}