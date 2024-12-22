"use client"
import { useState } from 'react';

type CartCounterProps = {
    value?: number
}

export default function CartCounter({ value = 0 }: CartCounterProps) {
    const [count, setCount] = useState(value)
    const handleClickIncrease = () => {
        const suma = count + 1
        setCount(suma)
    }
    const handleClickDecrease = () => {
        const resta = count - 1
        setCount(resta)
    }
    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    type="button"
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => handleClickIncrease()}
                >
                    +1
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => handleClickDecrease()}
                >
                    -1
                </button>
            </div>
        </>
    )
}
