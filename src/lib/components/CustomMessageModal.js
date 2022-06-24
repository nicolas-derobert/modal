import * as React from "react";
import "./CustomMessageModal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function CustomMessageModal(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		props.onRequestClose();
	};

	const isOpen = props.isOpen;

	React.useEffect(() => {
		if (isOpen === true) {
			handleOpen();
		}
		if (isOpen === false) {
			handleClose();
		}
	}, [isOpen]);

	return (
		<div>
			<div className={`cmm-backdrop${open?` open`:``}`}>
				<div className="cmm-modal">
					<div className="cmm-content">
						<div className="cmm-title ">
							<div></div>
							<div className="cmm-close-button">
								<button onClick={handleClose} className="cmm-button" >
									<AiOutlineClose />
								</button>
							</div>
						</div>
						<div className="cmm-message">
							<p>{props.messageToDisplay}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
