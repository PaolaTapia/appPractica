import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState<number>(0);
    const increaseBy = (value: number) => {
        setCount(Math.max(count + value, 0));
    }

    return { increaseBy, count };

}

export default useCounter