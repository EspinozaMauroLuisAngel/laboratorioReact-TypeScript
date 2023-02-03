import {useState} from 'react'
export const useContador = () => {
    const [count, setCount] = useState(0);

    const updateCount = ( newValue: number) => {
        setCount((value) => value + newValue );
    }
        return {
        count,
        updateCount
        }
}
