import App from "@/components/App";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Dynamic = dynamic(() => import('@/components/App'), {
	ssr: false
})


export default function Home() {

	return (
		<main>
			<Dynamic />
			<Footer />
		</main>
	)
}
