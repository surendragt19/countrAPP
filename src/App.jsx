import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { incNum,decNum, mulNum, devNum} from './action'



function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  const myState2=useSelector((state)=>state.numberReducer2)


  return (
    <>
      <h2>Increment Decrement Counter</h2>
      <h5>Using React and Redux</h5>
      <div>
        <button onClick={()=>dispatch(decNum())}>-</button>
        <input type='text' value={myState}/>
        <button onClick={()=>dispatch(incNum(2))}>+</button>
      </div>
      <br/>


      <h3>Multiply and Devision</h3>
      <h5>Using React and Redux</h5>
      <div>
        <button onClick={()=>dispatch(devNum())}>/</button>
        <input type='text' value={myState2}/>
        <button onClick={()=>dispatch(mulNum(5))}>*</button>
      </div>
    </>
  )
}

export default App
