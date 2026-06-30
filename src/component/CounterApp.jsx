import React, { useState } from 'react'

const CounterApp = () => {


  let [count, setcount] = useState(0)

     let mAssage  ;
     let remaining = 10 - count 

  function handleincrease (){

   setcount((precount) => precount + 1);

    }
  

     if (count < 10) {

      mAssage = (<div>
        <h2> you click {count} times </h2>
        <p> Still {remaining} more times to reach a 10% discount </p>
      </div>)

     }
     else if (count ===10 ){
    mAssage = (<div>
             <h3> YOU CLICK {count} TIMES</h3>
             <p>YOU UNLOCKES A 10 % DISCOUNT</p>
    </div>)

     }
  else if (count < 20 ){
    mAssage = (<div>
             <h3> YOU CLICK {count} TIMES</h3>
             <p>YOU'RE ON THE WAY TO  GOT  MORE REWARDS! KEEP CLICK FOR 20% DISCOUNT </p>
    </div>)
  }

   else {
    mAssage = (<div>
             <h3> YOU CLICK {count} TIMES</h3>
             <p>YOU ARE  REACH THE TOP REWARDS! YOU ARE A CLICK MASTER  </p>
    </div>)

    }   

  return (
    <div> 
        <h1>Click to  unlock rewards 🎉- {count}%</h1>

      <button  style = {{ background: "red"}} onClick={handleincrease} > Increase</button>
       {mAssage}
      
      
      {/* {count <= 10 ? (<p>  click 10 time unlocked rewards</p>):
      (<p>10% discount</p>)} 

      {
        count >= 20 && <p>  discount 20% </p>
      } */}
      
    </div>
  )
}

export default CounterApp