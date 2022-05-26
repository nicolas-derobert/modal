import React from "react";
import { CustomMessageModal } from "../lib";

const App = () => (
	<div>
		Hello Text
		<CustomMessageModal
			buttonTextToDisplay={"Save"}
			messageToDisplay={"Employee Created2!"}
		></CustomMessageModal>
	</div>
);

export default App;
