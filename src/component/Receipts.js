import { useState } from 'react';
import receipts from './Records';
import Records from './Records';

function Receipts({person, order, paid}) {
    const [satisfied, setSatisfied] = useState(satisfied);

    function checkPayment() {
        setSatisfied((bill) => (bill ? "satisfied" : 'notSatisfied'))

    }
    const { sauce, main, protein, rice, cost, drink, toppings } = order;
    return (
        <div>
            <div>
                <h1>My Receipts!</h1>
            </div>

            <button onClick={checkPayment} className='paymentButton'></button>

            <div className='receiptCard'>
                <h1>Person: {person}</h1>
                <h2>Main Order: {main}</h2>
                <h3>Protein: {protein}</h3>
                <h3>Rice: {rice}</h3>[]
                <h3>{paid}</h3>
            </div>
                <h3>{satisfied}</h3>

        </div>
    

    )
}

export default Receipts;