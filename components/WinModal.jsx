import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import Item from "@/components/Item";

function WinModal({item, isOpen, onClose, guessCount, restartGame}) {
	return (
		<Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">Congratulations!</ModalHeader>
						<ModalBody className="flex items-center justify-center">
							<div className="w-[200px]">
								<Item item={item}/>
							</div>
							<p>
								You guessed {item.title} in {guessCount} tries!
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={restartGame}>
								Play Again!
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

export default WinModal;