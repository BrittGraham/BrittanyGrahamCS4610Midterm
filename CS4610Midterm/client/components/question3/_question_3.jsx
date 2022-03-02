import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transactions } from './Transactions';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transacts, setTransacts] = useState([]);
  useEffect(async () => {
    const {transacts} = await api.get('/transactions');
    setTransacts(transacts);
  })

  return (
  <div>
    <div className='transaction-container'>
      {/* {transacts.map((trans) => (
        Transactions
      ))} */}
    </div>
  </div>
  );
};
