import Image from "next/image";



function PlayIcon() {
	return (
		<Image src={'/play.svg'} width={100} height={100} alt="Play icon" />
	);
}

export default PlayIcon;