"use client";

import React, {useState} from 'react'

const Handle = () => {
  const [count, setCount] = useState(0);
    return (
        <div>
            <p className='number'>{count}</p>
            <div>
                <button className= "first-button" onClick= {() =>
                    setCount((prev) =>{
                        if (prev == 10) return 10;
                        return prev + 1;
                    })}>INCREASE</button>
                <button className='second-button' onClick={() => setCount((prev) =>{
                    if (prev == 0) return 0;
                    return prev - 1;
                })}>DECREASE</button>
            </div>

        </div>
    
  )
}

export default Handle