import React, { useState, useEffect } from 'react';
import './App.css';

import Wallet from './Components/wallet'
import axios from 'axios'

function App() {
  const [id, setId] = useState('0')
  const [enter, setEnter] = useState()
  const [chain, setChain] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/chain')
      .then(({ data }) => {
        setChain(data.chain)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const handleChanges = e => {
    setEnter(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setId(enter)
  }

  return (
    <div className='App'>
      <h1>{id}'s wallet</h1>
      <form onSubmit={onSubmit}>
        <input value={enter} onChange={handleChanges} />
      </form>
      <Wallet id={id} chain={chain} />
    </div>
  )
}

export default App;
