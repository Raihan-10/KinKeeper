'use client'
import { useTimeline } from '@/context/TimelineContext'
import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function Statspage() {
    const { data } = useTimeline();

    const callCounting = data.filter(item => item.type === 'Call').length;
    const textCounting = data.filter(item => item.type === 'Text').length;
    const videoCounting = data.filter(item => item.type === 'Video').length;

    const chartData = [
        {
            name: 'Call', value: callCounting
        },
        {
            name: 'Text', value: textCounting
        },
        {
            name: 'Video', value: videoCounting
        },
    ];
    const countData = callCounting > 0 || textCounting > 0 || videoCounting > 0;
    const COLORS = ['#244D3F', '#64748B', '#10B981'];
    return (
        <div className='bg-[#F8FAFC] min-h-screen py-10 px-6'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h3 className='text-[36px] md:text-[48px] text-[#1F2937] font-bold'>Friendship Analytics</h3>

                <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'>
                    <p className='text-[#244D3F] text-[20px] font-medium mb-4'>By Interaction Type</p>

                 
                    {!countData ? (
                        <div className='w-full h-[300px] flex flex-col justify-center items-center text-center'>
                    
                            <p className='text-gray-400 text-sm font-medium'>No interactions logged yet.</p>
                  
                        </div>
                    ) : (
                        <div className='w-full h-[300px] flex justify-center items-center'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="60%"
                                        outerRadius="80%"
                                        cornerRadius={8}
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`} 
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
