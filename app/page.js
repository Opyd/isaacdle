"use client"

import {useState} from "react";
import {Button, Card, CardFooter} from "@nextui-org/react";
import Image from 'next/image'

import item1 from '/public/items/1.png'

export default function Home() {

  const [item, setItem] = useState({});
  const [isStarted, setIsStarted] = useState(false);


  return (
    <main className="pt-10 overflow-hidden">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Isaac Wordle
      </h1>
      <Card
        isFooterBlurred
        radius="lg"
        className="w-[200px] h-[200px] border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="/items/1.png"
          width={200}
        />
        <CardFooter
          className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Notify me
          </Button>
        </CardFooter>
      </Card>
      <div className="flex justify-center mt-10">
        <Button size="lg" variant="shadow" onClick={() => setIsStarted(true)} color="primary">Start</Button>
      </div>
    </main>
  )
}
