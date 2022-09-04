import React, {useEffect, useState} from 'react'
import { Button } from 'antd';

const Timer = () => {
    const [count, setCount] = useState(0)
    const [isStart, setIsStart] = useState(false)
    useEffect(() => {
    if (isStart) {
        const counter = setInterval(() => {
            setCount(count + 1)
        
    }, 1000)

        return () => {
            clearInterval(counter)
        }
    }
        
    }, [count, isStart])
    
    const onHandleReset = () => {
        setCount(0)
        setIsStart(false)
    }
    
    return (
        <>
         <div>
            <h1>Timer that uses the useEffect and useState hook</h1>
            <h2>Time: {count} </h2>
            <Button  type="primary"
                     shape="round"
                     size={"large"} 
                     onClick= {() => {setIsStart(true)}}>Start</Button>
            
            <br/>
            <br/>
            <br/>
            <Button type="primary"
                    ghost
                    shape="round"
                    size={"large"} 
                    onClick={onHandleReset}>Reset</Button>
            
         </div>
        </>
    )
}
export default Timer