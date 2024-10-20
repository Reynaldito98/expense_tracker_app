import './App.css'
import Header from '../Header/Header'
import Balance from '../Balance/Balance'
import History from '../History/History'
import TransactionForm from '../TransactionForm/TransactionForm'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);

  function handleSubmitButton(text, number) {
    setData([...data, {text: text, number: number}]);
    localStorage.setItem('transactions', JSON.stringify([...data, {text: text, number: number}]));
  }

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('transactions'))) {
      setData(JSON.parse(localStorage.getItem('transactions')));
    }
  }, []);

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Balance data={data}/>
        <History data={data}/>
        <TransactionForm handleSubmitButton={handleSubmitButton} data={data}/> 
      </div>
      <Footer />
    </div>
  )
}

export default App
