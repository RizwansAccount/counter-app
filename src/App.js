import React from 'react'
import { useCounterManager } from './components/customHooks/useCounterManager'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const App = () => {
  const {counter, fnIncreaseCounter, fnDecreaseCounter, fnResetCounter} = useCounterManager();
  return (
    <div style={styles.mainContainer}>

      <div style={styles.counterBox}>

        <div style={styles.btnBox} onClick={()=> fnDecreaseCounter()} >
          <FaMinus style={styles.btn}/>
        </div>

        <h1 style={styles.counterTxt} >{counter}</h1>

        <div style={styles.btnBox} onClick={()=> fnIncreaseCounter()} >
          <FaPlus style={styles.btn} />
        </div>

      </div>

      <button style={styles.resetBtn} onClick={()=> fnResetCounter()}>{'Reset'}</button>

    </div>
  )
}

const styles = {
  mainContainer:{display:'flex', alignItems:'center', flexDirection:'column', height:'100dvh', justifyContent:'center'},
  counterBox : {display:'flex', alignItems:'center', gap:15},
  counterTxt:{ userSelect:'none', minWidth:60, textAlign:'center' },
  btnBox:{height:60, width:60, borderRadius:30, backgroundColor:'#112D4E', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'},
  btn :{ userSelect:'none', color:'white' },
  resetBtn:{ cursor:'pointer', borderWidth:0, paddingLeft:45, paddingRight:45, paddingTop:10, paddingBottom:10, marginTop:30, backgroundColor:'#112D4E', color:'white', borderRadius:6, fontSize: 16, userSelect:'none'}
}

export default App;
