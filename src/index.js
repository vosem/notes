import React from "react";
import ReactDom from "react-dom";

let title = "Enter your note here";

ReactDom.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
