import { useState } from 'react';

export default function Receipt({person, order, paid, ...receipt}) {
    const [bill, setSatisfied] = useState(paid);

    function checkPayment() {
        setSatisfied((bill) => (bill ? "Paid" : 'Not Paid'));

    }

    const { sauce, main, protein, rice, cost, drink, toppings } = order;
    
    return (
        <div>
            <div className='receiptCard'>
                <h1>{person}</h1>
                <div>
                    <h2>Main: {main}</h2>
                    <h3>Protein: {protein}</h3>
                    <h3>Rice: {rice}</h3>
                    <h3>Sauce: {sauce}</h3>
                    <h3>Drink: {drink}</h3>
                    <h3>Cost: ${cost}</h3>
                </div>
                
            </div>
                <div>
                    <button onClick={checkPayment} className='paymentButton'>Paid</button>
                    <h3>{bill}</h3>
                </div>
        </div>
    )
}