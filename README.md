# custom-message-react-modal

Modal jsx element with customizable message 
## Table of Contents

* [Features](#Features)
* [Installation](#installation)
* [Examples](#examples)

## Features
- Allow customization of messages that is displayed in modal
- 

## Installation

To install, you can use [npm](https://npmjs.org/) :

    $ npm install custom-message-react-modal    

## Examples

Here is a simple example of custom-message-react-modal being used in an app with some custom input elements within the modal content:

```jsx
import React from "react";
import { CustomMessageModal } from "custom-message-react-modal";

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
				messageToDisplay={"Message to display"}
			></CustomMessageModal>
		</div>
	);
}
export default App;

```


