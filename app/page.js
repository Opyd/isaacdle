"use client"

import {useState} from "react";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import Item from "@/components/Item";
import GuessInput from "@/components/GuessInput";
import GuessList from "@/components/GuessList";
import getRandomItem from "@/app/getRandomItem";
import JSConfetti from 'js-confetti';
import WinModal from "@/components/WinModal";


export default function Home() {
	const [item, setItem] = useState({});
	const [isStarted, setIsStarted] = useState(false);
	const [itemGuessed, setItemGuessed] = useState(false);
	const [currentGuess, setCurrentGuess] = useState(false);
	const [invalidGuessList, setInvalidGuessList] = useState([]);
	const {isOpen, onOpen, onClose} = useDisclosure();

	const jsConfetti = new JSConfetti();

	const startGame = () => {
		setIsStarted(true);
		setItem(getRandomItem);
	}

	const resetGuess = () => {
		setCurrentGuess(false);
	}

	const guess = async () => {
		setInvalidGuessList([...invalidGuessList, currentGuess]);
		if (currentGuess.itemId !== item.itemId) {
			setCurrentGuess(false);
			return;
		}
		setItemGuessed(true);
		onOpen();
		await jsConfetti.addConfetti();
	}

	const restartGame = () => {
		setInvalidGuessList([]);
		setItemGuessed(false);
		setCurrentGuess(false);
		startGame();
	}


	return (
		<main className="pt-10 overflow-hidden grid grid-cols-12">
			<div className="col-start-1 col-span-3 ml-5">
				<GuessList targetItem={item} invalidGuesses={invalidGuessList}/>
			</div>
			<div className="col-start-5 col-span-4">
				<h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
					Isaac Wordle
				</h1>
				<h2 className="text-center mt-10">Check your The Binding of Isaac items knowledge!</h2>
				{!isStarted ? (
					<>
						<div className="flex justify-center mt-[340px]">
							<Button startContent={<h1>▶</h1>} className="h-[100px] w-[200px] text-4xl uppercase" variant="shadow" onClick={startGame}
							        color="secondary">Start</Button>
						</div>
					</>
				) : (
					<div className="container flex flex-col items-center">
						<div className="flex relative flex-col gap-y-2 justify-center mt-[50px]">
							<Button className="absolute -right-12 top-0" onClick={resetGuess} variant="ghost" radius="full"
							        isIconOnly>↺</Button>
							<Item item={currentGuess}/>
							<Button isDisabled={!currentGuess && !itemGuessed} onClick={itemGuessed ? restartGame : guess} color="secondary"
							        variant="shadow" size="lg">
								{itemGuessed ? 'Play again' : 'Guess'}
							</Button>
						</div>
						<div className="mt-10 flex w-[420px]">
							<GuessInput setGuessedItem={setCurrentGuess}/>
						</div>
					</div>
				)}
				{itemGuessed ? (
					<WinModal onClose={onClose} isOpen={isOpen} item={item} restartGame={restartGame} guessCount={invalidGuessList.length}/>
				) : null}
			</div>
		</main>
	)
}
