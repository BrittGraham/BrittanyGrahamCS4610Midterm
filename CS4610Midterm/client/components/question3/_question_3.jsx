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

  //I'm not understading why this isn't working.
  // Note in Transactions component.
  return (
  <div>
    <div className='transaction-container'>
      <div>
        {/* {transacts.map((trans) => (
          <div>
            {trans.fromUser.name} {trans.amount} {trans.toUser.name}
          </div>
        ))} */}
      </div>
    </div>
  </div>
  );
};
