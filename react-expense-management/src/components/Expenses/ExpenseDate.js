import './ExpenseDate.css';
const ExpenseDate=(props)=> {


    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear('en-US', { month: 'long' });

    return (
        <div className="expense-item__date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;