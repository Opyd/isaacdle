import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {Chip} from "@nextui-org/react";

function Footer() {
	return (
		<div className="absolute top-2 right-2">
			<p className="flex items-center gap-x-2 bg-[#3f3f46] rounded-[10px] px-2 py-1 text-xs">
				Created with ❤️ by <GitHubLogoIcon/>
				<a href="https://github.com/opyd" target="_blank">Opyd</a>
			</p>
		</div>
	);
}

export default Footer;