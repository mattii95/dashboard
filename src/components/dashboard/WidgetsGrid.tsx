"use client"
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export default function WidgetsGrid() {
    const count = useAppSelector(state => state.counter.count)
    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                title={`${count}`}
                subtitle='Cantidad de items'
                icon={<IoCartOutline size={50} className="text-blue-500" />}
                label='Contador'
                href='/dashboard/counter'
            />
        </div>
    )
}
