import ReactDOM from "react-dom/client";
import DemoRouter from "./DemoRouter";

//importing bootstrap for all components in the principal index.js file -> import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";

const greetingMessage =<div>Hello React Workshop2!</div>;
console.log(">>>>>>> Hello React_Workshop2!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DemoRouter/>);

