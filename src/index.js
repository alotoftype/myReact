import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
// writing my firt react component
const Key = process.env.key

const API_KEY = Key

const App = () => {
    return (
    <div>
    <SearchBar />
    </div> )
}
let application = document.querySelector('.container')

//bringing my new component to the dom
ReactDOM.render(<App />, application)