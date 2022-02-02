import { useState } from 'react'
import './App.css';
import Receipts from './component/Receipts';
import Records from './component/Records';

function App() {
  const [receipts, setReceipts] = useState(Records)
  
  const data = receipts.map((item, index) => {
    return (
      <Receipts 
        {...item} 
        key={index}
      />
    )
  })
  
  return (
    <div className="App">
      <h1>Testing!</h1>
      {data}
    </div>
  );
}

export default App;
