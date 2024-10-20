import './Transaction.css';

function Transaction(props) {
    return (
        <li className="transaction">
            <p className="transaction__heading">{props.item.text}</p>
            <div className="transaction__right-column">
                <p className="transaction__number">{(props.item.number>0)?'+':'-'}{props.item.number}</p>
                <div className={`transaction__color ${(props.item.number>0)?'transaction__color_green':'transaction__color_red'}`}></div>
            </div>
        </li>
    )
}

export default Transaction;