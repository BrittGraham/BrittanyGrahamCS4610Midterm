import { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
export const Todo = ({ todo }) => {
  const api = useContext(ApiContext);
  const [checkboxChecked, setCheckboxChecked] = useState(todo.isComplete);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(async () => {
    //does not keep the box checked when page reloads.
    const checkCompleted = await api.get('/todos');
    checkCompleted = isComplete
    if(checkCompleted === true){
      setIsComplete(true);
      setCheckboxChecked(true);
    }
  })

  const onCheckboxChange = async (e) => {
    setCheckboxChecked(e.target.checked);
    // put your API call here!
    // you wont actually need to do anything with the result of the API call
    // because we are optimistically updating the state.
    // When you refresh the page you should see your state persist.
    fetch('/UpdateTodo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isComplete,
      })
    })
    window.location.reload(false);
    
  };

  return (
    <div className="p-4 border-2 border-gray-500 rounded">
      <input type="checkbox" checked={checkboxChecked} onChange={onCheckboxChange} /> {todo.content}
    </div>
  );
};
