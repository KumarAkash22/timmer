import { useEffect, useState } from "react";

export const Timer = () =>{
    const [counter, setCounter] = useState(0);
    useEffect (()=>{
       const id =  setInterval(() =>{
            setCounter((p)=> {
                if(p === 60){
                    clearInterval(id)
                    return 0;
                }
                return p+1 ;
            }); 
            },1000);
            return ()=>{
                clearInterval(id);
            }
    },[]);
    return <div>Count is: {counter} </div> 
}