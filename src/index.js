import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RenderAfterNavermapsLoaded ncpClientId={"9gnpxruwbr"}>
        <App />
      </RenderAfterNavermapsLoaded>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
