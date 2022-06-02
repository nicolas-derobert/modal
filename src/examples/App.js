import React from "react";
import { CustomMessageModal } from "../lib";

// const App = () =>
function App(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	return (
		<div>
			Hello Text
			<button onClick={handleOpen}>Hello</button>
			<CustomMessageModal
				isOpen={open}
				onRequestClose={handleClose}
				buttonTextToDisplay={"Save"}
				messageToDisplay={"Employee Created2!"}
			></CustomMessageModal>
		</div>
	);
}
export default App;
