//state,useEffect
import { Spin} from "antd";
import { useEffect, useState } from "react";
import {LoadingOutlined} from '@ant-design/icons';
function Counter(){

    const[count,setCount] = useState(0)
    const[count1,setCount1] = useState(0)
    const[isloading,setIsLoading]=useState(false)
    const decrement = ()=>{
        setIsLoading(true)
        setCount(count-1)
    }
    const increment = ()=>{
        setIsLoading(true)
        setCount(count+1)
    }
    // useEffect in mounting phase;
    // useEffect(() => { 
    //      setIsLoading(true)
    //      setTimeout(()=>{
    //          setIsLoading(false)
    //     },2000)
    //  },[]);

    // useEffect in updating phase
    useEffect(() =>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    },[isloading]);
    // useEffect in unmounting phase
    useEffect(()=>{
        return() =>{
            console.log(`Component unmounted`);
        };
    },[]);
    const spinner= <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    // Text instead of spinner in useEffect
    // const spinner=<h1>Loading..</h1>
    const counter = <h1>Counter:{count}</h1>
    if(count>10){
        throw new Error("count is greater than 10")
    }
    return(
        <div>
            {/* Code to get spinner
            <h1>{isloading?spinner:`Counter : ${count}`}</h1> */}
            <div>{ counter}</div>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;