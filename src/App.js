import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { FETCH_CITY } from './redux/test/testSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const respo = dispatch(FETCH_CITY())
    console.log(respo);
  },[])

  const data = useSelector(state => console.log(state.country)) 

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
