import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";
import logo from "./assets/big_logo.png"; // Tell webpack this JS file uses this image

class App extends React.Component {
  render = () => {
    return (
      <div>
        <ReactTypeformEmbed url="https://yusuf225078.typeform.com/to/jCmMc3A8" />
      </div>
    );
  };
}

export default App;
