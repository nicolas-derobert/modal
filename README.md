# custom-message-react-modal

Modal jsx element with customizable message 
## Table of Contents

* [Features](#Features)
* [Installation](#installation)
* [Examples](#examples)

## Features
- Allow customization of message that is displayed in modal
- Allow style customization

If you want to override a component's styles using custom classes, you can use the className prop, available on each component. For example, target the **.cmm-backdrop** class name to customize the Backdrop element :
You can customize the following elements :
- **backdrop** by overriding "**.cmm-backdrop**" class
- **modal** by overriding "**.cmm-modal**" class
- **content** by overriding "**.cmm-content**" class
- **message** by overriding "**.cmm-message**" class

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


