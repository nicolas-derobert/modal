import React from "react";
import { CustomMessageModal } from "../lib";

function App(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div>
			<button onClick={handleOpen}>Hello</button>
			<CustomMessageModal
				isOpen={open}
				onRequestClose={handleClose}
				messageToDisplay={"Message to display2"}
			></CustomMessageModal>
		</div>
	);
}
export default App;
