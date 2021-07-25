import React from "react";
import ReactDOM from "react-dom";

import { showMessage } from "../../libs/my-library";

class App extends React.Component {
    render() {
        return <div>{showMessage()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));