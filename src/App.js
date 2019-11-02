import React from 'react';
import Paragraph from './components/paragraph';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>BrainWeb</h1>
            </header>
            <Paragraph content='Simon'/>
        </div>
    );
}

export default App;
