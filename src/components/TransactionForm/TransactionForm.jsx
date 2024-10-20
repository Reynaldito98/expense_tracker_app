import './TransactionForm.css';
import { useState } from 'react';

function TransactionForm(props) {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        props.handleSubmitButton(text, number);
        setText('');
        setNumber('');
    }

    function handleTextChange(evt) {
        setText(evt.target.value);
    }

    function handleNumberChange(evt) {
        setNumber(evt.target.value);
    }

    return (
        <div className="transaction-form">
            <p className="transaction-form__heading">Add new transaction</p>
            <hr />
            <form className="transaction-form__form" onSubmit={handleSubmit}>
                <fieldset className="transaction-form__fieldset">
                    <label htmlFor='text' className="transaction-form__label">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." className="transaction-form__input" value={text} onChange={handleTextChange}/>
                </fieldset>

                <fieldset className="transaction-form__fieldset">
                    <label htmlFor='number' className="transaction-form__label">Amount<br/>(negative-expense, positive-income)</label>
                    <input type="number" id="number" placeholder="Enter amount..." className="transaction-form__input" value={number} onChange={handleNumberChange}/>
                </fieldset>

                <button className="transaction-form__button" type="submit">Add transaction</button>
            </form>
        </div>
    )
}

export default TransactionForm;