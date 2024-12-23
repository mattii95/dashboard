"use client"
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

type CartCounterProps = {
    value?: number
}

type CounterResponse = {
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json())
    return data
}

export default function CartCounter({ value = 0 }: CartCounterProps) {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(initCounterState(value))
    // }, [dispatch, value])
    useEffect(() => {
        getApiCounter()
            .then(data => dispatch(initCounterState(data.count)))
    }, [dispatch])

    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    type="button"
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(substractOne())}
                >
                    -1
                </button>
            </div>
        </>
    )
}
