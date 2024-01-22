import {GitHubLogoIcon} from "@radix-ui/react-icons";

function Footer() {
	return (
		<div className="absolute bottom-5 right-5">
			<p>Created by Daniel Opyd</p>
			<p className="flex gap-x-2 items-center">
				<GitHubLogoIcon/>
				<a href="https://github.com/opyd" target="_blank">Opyd</a>
			</p>
		</div>
	);
}

export default Footer;