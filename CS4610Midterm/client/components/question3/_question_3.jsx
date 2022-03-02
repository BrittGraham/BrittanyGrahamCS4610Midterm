import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transactions } from './Transactions';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transacts, setTransacts] = useState([]);
  useEffect(async () => {
    const {transact} = await api.get('/transactions');
  })

  return (
  <div>
    <div className='transaction-container'>
      {transacts.map((trans) => (
        <div key={product.id}>
          <p>{trans.amount}</p>
          <p>{trans.fromUser.name}</p>
          <p>{trans.toUser.name}</p>
        </div>
      ))}
    </div>
  </div>
  );
};
