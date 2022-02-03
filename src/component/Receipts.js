import { useState } from "react";
import records from "../data/Records";
import Receipt from "./Receipt";


function Receipts(){
    const [receipts, setReceipts] = useState(records);

    return(
        <div className="receipt">
            {receipts.map((receipt, index) => {
                return <Receipt {...receipt} key={index} />;
            })}
        </div>
    );

}
export default Receipts;