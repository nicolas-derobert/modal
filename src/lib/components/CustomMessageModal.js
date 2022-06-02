import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./CustomMessageModal.css"

// const style = {
	// position: "absolute",
	// top: "50%",
	// left: "50%",
	// transform: "translate(-50%, -50%)",
	// width: 400,
	// bgcolor: "background.paper",
	// border: "2px solid #000",
	// boxShadow: 24,
	// p: 4,
// };

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
			<Modal open={open} onClose={handleClose}>
				<Box className="modal">
					<div className="content">
						<Box display="flex" alignItems="center" className="title ">
							<Box flexGrow={1}></Box>
							<Box>
								<IconButton onClick={handleClose}>
									<CloseIcon />
								</IconButton>
							</Box>
						</Box>
						<Box className="message"><p>{props.messageToDisplay}</p></Box>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
