import React, { useEffect, useState } from 'react';

const FraudeBanco = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GraphQL query as a string
  const query = `
    query {
      transactions {
        cantidad
      }
    }
  `;

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/graphql', {  // Adjust URL if different
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          setError(data.errors[0].message);
          setLoading(false);
          return;
        }
        setTransactions(data.data.transactions);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Transaction Amounts</h2>
      <ul>
        {transactions.length === 0 && <li>No hay transacciones .</li>}
        {transactions.map((tx, index) => (
          <li key={index}>{tx.cantidad}</li>
        ))}
      </ul>
    </div>
  );
};

export default FraudeBanco;
