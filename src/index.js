import React from "react";
import ReactDOM from "react-dom";
import Modal from "./lib/Modal";

ReactDOM.render(<div>Hello Text<Modal buttonTextToDisplay={'Save'} messageToDisplay={'Employee Created!'}></Modal></div>, document.getElementById("root"));