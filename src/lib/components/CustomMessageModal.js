import * as React from "react";
// import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./CustomMessageModal.css";


export default function CustomMessageModal(props) {
	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => setOpen(true);
	const handleClose = () => {
		// setOpen(false);
		props.onRequestClose();
	};

	const isOpen = props.isOpen;
	// const closeRequest = props.onRequestClose;

	React.useEffect(() => {
		// if (isOpen === true) {
		// 	handleOpen();
		// }
		if (isOpen === false) {
			handleClose();
		}
	}, [isOpen]);

	return (
		<div>
			{/* <Modal open={open} onClose={handleClose}> */}
			<div className={`cmm-backdrop${isOpen?` open`:``}`}>
				<div className="cmm-modal">
					<div className="cmm-content">
						<div className="cmm-title ">
							<div></div>
							<div className="cmm-close-button">
								<IconButton onClick={handleClose}>
									<CloseIcon />
								</IconButton>
							</div>
						</div>
						<div className="cmm-message">
							<p>{props.messageToDisplay}</p>
						</div>
					</div>
				</div>
			{/* </Modal> */}
			</div>
		</div>
	);
}
