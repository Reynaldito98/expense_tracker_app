import './History.css';
import Transaction from '../Transaction/Transaction';

function History(props) {
    return (
        <div className="history">
            <p className="history__heading">History</p>
            <hr />
            <ul className="history__list">
                {
                    props.data.map((item, index) => {
                        return <Transaction key={index} item={item}/>
                    })
                }
            </ul>
        </div>
    )
}

export default History;