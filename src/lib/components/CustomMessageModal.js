import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function CustomMessageModal(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		props.onRequestClose();
	};

	const isOpen = props.isOpen;
	// const closeRequest = props.onRequestClose;

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
			{/* <button onClick={handleOpen}>{props.buttonTextToDisplay}</button> */}
			<Modal
				open={open}
				onClose={handleClose}
				// aria-labelledby="modal-modal-title"
				// aria-describedby="modal-modal-description"
			>
				<Box sx={style}>{props.messageToDisplay}</Box>
			</Modal>
		</div>
	);
}
