import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <header>
            <h1>Welcome to Passgen</h1>
        </header>
    );
}

ReactDOM.render(<Header />, document.getElementById('root'));