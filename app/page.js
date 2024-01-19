"use client"

import {useEffect, useState} from "react";
import {Button, Card, CardFooter} from "@nextui-org/react";
import Item from "@/components/Item";
import GuessInput from "@/components/GuessInput";
import GuessList from "@/components/GuessList";
import getRandomItem from "@/app/getRandomItem";

export default function Home() {
  const [item, setItem] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [itemGuessed, setItemGuessed] = useState(false);
  const [currentGuess, setCurrentGuess] = useState(false);
  const [invalidGuessList, setInvalidGuessList] = useState([]);
  const [queryStr, setQueryStr] = useState('');


  const startGame = () => {
    setIsStarted(true);
    setItem(getRandomItem);
  }

  const resetGuess = () => {
    setCurrentGuess(false);
  }

  const guess = () => {
    if (currentGuess.itemId !== item.itemId) {
      setInvalidGuessList([...invalidGuessList, currentGuess]);
    }
  }



  return (
    <main className="pt-10 overflow-hidden grid grid-cols-12">
      <div className="col-start-1 col-span-3 ml-5">
        <GuessList targetItem={item} invalidGuesses={invalidGuessList} />
      </div>
      <div className="col-start-5 col-span-4">
        <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Isaac Wordle
        </h1>
        {!isStarted ? (
          <div className="flex justify-center mt-[400px]">
            <Button size="lg" variant="shadow" onClick={startGame} color="primary">Start</Button>
          </div>
        ) : (
          <div className="container flex flex-col items-center">
            <div className="flex relative flex-col gap-y-2 justify-center mt-[100px]">
              <Button className="absolute -right-12 top-0" onClick={resetGuess} variant="ghost" radius="full" isIconOnly>↺</Button>
              <Item item={currentGuess}/>
              <Button isDisabled={!currentGuess} onClick={guess} color="secondary" variant="shadow" size="lg">
                Guess
              </Button>
            </div>
            <div className="mt-10 flex w-[420px]">
              <GuessInput setGuessedItem={setCurrentGuess} handleChange={setQueryStr}/>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
