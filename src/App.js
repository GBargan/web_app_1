import './App.css';
import * as React from 'react';
import axios from 'axios';

function App() {
    const [currentQuote, setCurrentQuote] = React.useState('');
    const [quoteArray, setQuoteArray] = React.useState([]);
    const [showQuoteList, setShowQuoteList] = React.useState(false);

    const changeQuote = () => {
        axios.get('http://localhost:5000/get_quote')
            .then(response => {
                const newQuote = response.data.output;

                if (quoteArray.includes(newQuote)) {
                    console.log('Quote exists, requesting another quote');

                    changeQuote();
                } else {
                    setCurrentQuote(newQuote);
                    setQuoteArray([
                        ...quoteArray, newQuote
                    ]);
                }
            })
            .catch(error => {
                console.error('Error running the script:', error);
            });
    };

    const handleQuoteClick = () => {
        changeQuote();
    };

    const toggleQuoteList = () => {
        setShowQuoteList(!showQuoteList);
    }

    return (
        <div className="main-container">
            <div className="center-quote-container">
                <button type="button" className="get-quote-button" onClick={handleQuoteClick}>
                    Get Another Quote
                </button>
            </div>

            <div className="center-history-container">
                <button type="button" className="history-button" onClick={toggleQuoteList}>
                    {showQuoteList ? 'Hide Previous Quotes' : 'Show Previous Quotes'}
                </button>
            </div>

            <div className="result-container">
                <div className="result-text-container">
                    {currentQuote}
                </div>
            </div>

            {showQuoteList && (
                <div className="quote-history">
                    <h3>Previous Quotes:</h3>
                    <ul>
                        {quoteArray.map((quote, index) => (
                            <li key={index}>{quote}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
