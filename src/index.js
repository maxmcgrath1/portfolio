// import ReactDOM from 'react-dom';
import App from "./App";
import * as ReactDOMClient from 'react-dom/client'

// ReactDOM.render(<App/>, document.querySelector("#root"))

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)