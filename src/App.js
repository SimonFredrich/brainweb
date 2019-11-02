import React from 'react';
import Paragraph from './components/paragraph';
import data from './database/geschichte.json';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>BrainWeb</h1>
            </header>
            <Paragraph content={data.themen.attische_demokratie.unterthema1.content}/>
        </div>
    );
}

export default App;
