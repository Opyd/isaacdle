import {GitHubLogoIcon} from "@radix-ui/react-icons";

function Footer() {
	return (
		<div className="absolute right-5 bottom-3 lg:bottom-5">
			<p className="flex items-center gap-x-2">
				Created with ❤️ by <GitHubLogoIcon/>
				<a href="https://github.com/opyd" target="_blank">Opyd</a>
			</p>
		</div>
	);
}

export default Footer;