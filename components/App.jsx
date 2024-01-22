"use client";

import React, {useState} from 'react';
import GuessList from "@/components/GuessList";
import {Button, useDisclosure} from "@nextui-org/react";
import PlayIcon from "@/components/PlayIcon";
import Item from "@/components/Item";
import GuessInput from "@/components/GuessInput";
import WinModal from "@/components/WinModal";
import JSConfetti from "js-confetti";
import getRandomItem from "@/app/getRandomItem";

function App() {

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
		<div className="pt-10 grid grid-cols-12">
			<div className=" lg:col-start-1 lg:col-span-3 lg:ml-5">
				{isStarted ? (
					<GuessList targetItem={item} invalidGuesses={invalidGuessList}/>
				) : null}
			</div>
			<div className="col-start-0 col-span-12 lg:col-start-5 lg:col-span-4">
				<h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
					Isaac Wordle
				</h1>
				<h2 className="text-center mt-10">Check your The Binding of Isaac items knowledge!</h2>
				{!isStarted ? (
					<>
						<div className="flex justify-center mt-[200px]">
							<Button isIconOnly variant="shadow" color="secondary" className="w-[120px] h-[120px] animate-pulse" onClick={startGame}
							        aria-label="Start the game">
								<PlayIcon/>
							</Button>
						</div>
					</>
				) : (
					<div className="container flex flex-col items-center">
						<div className="flex relative flex-col gap-y-2 justify-center mt-[50px]">
							<Button className="absolute -right-12 top-0" onClick={resetGuess} variant="ghost" radius="full"
							        isIconOnly>↺</Button>
							<Item item={currentGuess}/>
							<Button isDisabled={!currentGuess && !itemGuessed} onClick={itemGuessed ? restartGame : guess}
							        color="secondary"
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
					<WinModal onClose={onClose} isOpen={isOpen} item={item} restartGame={restartGame}
					          guessCount={invalidGuessList.length}/>
				) : null}
			</div>
		</div>
	);
}

export default App;