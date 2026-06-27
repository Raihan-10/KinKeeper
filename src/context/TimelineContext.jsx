'use client'
import React, { createContext, useContext, useState } from 'react'

const TimelineContext = createContext();

export default function TimelineContextProvider({ children }) {
    const [data, setData] = useState([])
    const addTimeline = (newData) => {
        setData((prevData) => [newData, ...prevData]);
    };

    return (
        <TimelineContext.Provider value={{ data, addTimeline }}>
            {children}
        </TimelineContext.Provider>
    )
}

export const useTimeline = () => useContext(TimelineContext)