import reactdom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

reactdom.createRoot(document.querySelector("#root")).render(<App />);
