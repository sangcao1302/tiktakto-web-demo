import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import './TikTakToe.css'
function Tiktaktoe() {
    const [toggle,setToggle]=useState(true)
    const [buttons,setButton]=useState(Array(16).fill(""))
    const [won,setWon]=useState("")
    const conditionWin=[
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,6,8,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]

    ]
    function handleClick(pos){
       if(toggle)
       {
           
           buttons[pos]="X"
           setButton(buttons)
           setToggle(false)
       
       }
       else{
          
           buttons[pos]="O"
           setButton(buttons)
           setToggle(true)
    
       }
       let roundWon=false
     
       for (let i=0;i<conditionWin.length;i++)
       {
           const win=conditionWin[i]
           const a=buttons[win[0]]
           const b=buttons[win[1]]
           const c=buttons[win[2]]
           const d=buttons[win[3]]
           if(a===""|| b===""||c===""||d==="")
           {
            continue
           }
           if(a===b && b===c && c===d)
           {
                roundWon=true
                break
           }
               
       }
       if (roundWon && toggle===true)
       {
            setWon("Winner X")
       }
       if (roundWon && toggle===false)
       {
        setWon("Winner O")
       }
    }
  const handleReset=useCallback(()=>{
    return window.location.reload()
  },[])
     
  
    return (
        <div>
             <h1 className="heading">{won}</h1>
             <div className='panel-control'>
         
                <div className='panel'>
                
                {
                    
                    buttons.map((button,index)=>
                    
                        { return <button className="btn" key={index} onClick={()=>handleClick(index)}><br></br>{buttons[index]}</button>}
                    )
                }
                    
                 </div>
             </div>
             <button className='btn-reset' onClick={handleReset}>Reset</button>
        </div>
       
      
    );
}

export default Tiktaktoe;