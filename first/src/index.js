import ReactDom from 'react-dom/client'
import App from './App.js';
import './main.css';
let root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<App />)