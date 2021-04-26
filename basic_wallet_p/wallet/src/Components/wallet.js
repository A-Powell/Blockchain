import React, { useEffect, useState } from 'react'

const Wallet = (props) => {
    const { id } = props
    const { chain } = props
    const received = [0]
    const sent = [0]
    const positive = []
    const negative = []

    // find blocks recieved
    for (const block of chain) {
        block.transactions.filter(trans => trans.recipient == id).map(t => (
            received.push(t.amount),
            positive.push(t)
        ))
    }
    // find blocks sent
    for (const block of chain) {
        block.transactions.filter(trans => trans.sender == id).map(t => (
            sent.push(t.amount),
            negative.push(t)
        ))
    }

    const total = (received.reduce((acc, val) => acc + val)) - (sent.reduce((acc, val) => acc + val))

    useEffect(() => {
    }, [props])

    return (
        <div className='wallet'>
            <h2>Balance: {total}</h2>

            <h1 id="t-h1">Transactions</h1>
            <div className='transactions'>
                <div className="recieved">
                    <h2>Recieved</h2>
                    {positive.map(pos => (
                        <div>
                            <h2>Sender: {pos.sender}, Amount: {pos.amount}</h2>
                            <h3></h3>
                        </div>
                    ))}
                </div>
                <div className="sent">
                    <h2>Sent</h2>
                    {negative.map(pos => (
                        <div>
                            <h2>Recipient: {pos.recipient}, Amount: {pos.amount}</h2>
                            <h3></h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wallet