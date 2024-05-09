import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { incNum,decNum } from './action'



function App() {
  const myState=useSelector((state)=>state.changeTheNumber)

  const dispatch=useDispatch()


  return (
    <>
      <h1>Increment Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div>
        <button onClick={()=>dispatch(decNum())}>-</button>
        <input type='text' value={myState}/>
        <button onClick={()=>dispatch(incNum(2))}>+</button>
      </div>
    </>
  )
}

export default App
