import './Balance.css';

function Balance(props) {
    const positiveBalance = props.data.filter(item => Number(item.number)>0).map(item => Number(item.number)).reduce((acc, item) => acc + item, 0);
    const negativeBalance = props.data.filter(item => Number(item.number)<0).map(item => Number(item.number)).reduce((acc, item) => acc + item, 0);
    const total = positiveBalance + negativeBalance;

    return (
        <div className="balance">
            <p className="balance__heading">Your balance</p>
            <p className="balance__number">&#36;{total.toFixed(2)}</p>

            <div className="balance__detail-table">
                <div className="balance__container">
                    <p className="balance__title">Income</p>
                    <p className="balance__content balance__content_color_green">&#36;{positiveBalance.toFixed(2)}</p>
                </div>
                <div className="balance__line"></div>
                <div className="balance__container">
                    <p className="balance__title">Expense</p>
                    <p className="balance__content balance__content_color_red">&#36;{negativeBalance.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance;