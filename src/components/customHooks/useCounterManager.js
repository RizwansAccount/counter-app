import { useState } from "react";

export function useCounterManager() {

    const [counter, setCounter] = useState(0);

    const fnIncreaseCounter =()=>{
        setCounter((pre)=> pre+1);
    };

    const fnDecreaseCounter =()=>{
        if(counter > 0) {
            setCounter((pre)=> pre-1);
        };
    };

    const fnResetCounter =()=>{
        setCounter(0);
    }

    return {
        counter,

        fnIncreaseCounter,
        fnDecreaseCounter,
        fnResetCounter

    }
}