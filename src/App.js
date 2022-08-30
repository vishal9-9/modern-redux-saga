import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { FETCH_CITY } from './redux/test/testSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FETCH_CITY())
  },[])

  const data = useSelector(state => state.country)

  return (
    <div className="App">
      <h1>Hello World</h1>
      {data.isLoading && <h2>LOADING</h2>}
      {data.city.length > 0 && <h3>Got Data</h3>}
    </div>
  );
}

export default App;
