import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)