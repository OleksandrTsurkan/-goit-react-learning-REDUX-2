import { useDispatch, useSelector } from 'react-redux';

import { getClicksValue, update } from 'redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfCLicks = useSelector(getClicksValue);

  return (
    <div>
      <h1>Number of clicks {numberOfCLicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5 clicks
      </button>{' '}
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10 clicks
      </button>{' '}
      <button type="button" onClick={() => dispatch(update(15))}>
        Add 15 clicks
      </button>
    </div>
  );
};
