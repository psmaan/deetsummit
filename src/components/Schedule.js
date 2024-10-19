import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Navbar from './Navbar'

const Schedule = () => {

    const [selectedDay, setSelectedDay] = useState(11);
    const [fade, setFade] = useState(false); // State for fade effect

    // Schedule data for each day
    const schedule = {
        11: {
            day: 'November 11',
            sessions: {
                morning: {
                    time: '10:00 AM - 12:00 PM',
                    events: [
                        {
                            title: 'Keynote Address: The Future of Digital Education in Africa',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Panel Discussion: Integrating Digital Literacy into Curricula',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Workshop: Leveraging EdTech to Overcome Educational Barriers',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                },
                afternoon: {
                    time: '12:00 PM - 3:00 PM',
                    events: [
                        {
                            title: 'Case Study Presentation: Building Partnerships Between African and Global Educational Institutions',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Breakout Session: Virtual Learning—Opportunities and Challenges in African Contexts',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                }
            }
        },
        12: {
            day: 'November 12',
            sessions: {
                morning: {
                    time: '10:00 AM - 12:00 PM',
                    events: [
                        {
                            title: 'Fireside Chat: Scaling Startups in Africa—Strategies for Growth and Sustainability',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Panel Discussion: Women in Tech—Empowering Female Entrepreneurs in the Digital Economy',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                },
                afternoon: {
                    time: '12:00 PM - 3:00 PM',
                    events: [
                        {
                            title: 'Interactive Workshop: Navigating the African Tech Ecosystem—Opportunities and Challenges',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Case Study Session: 5G and Internet Connectivity—Transforming African Economies',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                }
            }
        },
        13: {
            day: 'November 13',
            sessions: {
                morning: {
                    time: '10:00 AM - 12:00 PM',
                    events: [
                        {
                            title: 'Keynote Address: Crafting Policies for Digital Transformation in Africa',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Panel Discussion: The Role of Governments in Promoting Tech Innovation',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                },
                afternoon: {
                    time: '12:00 PM - 3:00 PM',
                    events: [
                        {
                            title: 'Workshop: Venture Capital and Funding Opportunities for African Startups',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        },
                        {
                            title: 'Panel Discussion: Public-Private Partnerships (PPP) in Advancing Digital Infrastructure',
                            speaker: 'Speaker Name',
                            designation: 'Speaker Designation'
                        }
                    ]
                }
            }
        }
    };

    // Handle day selection with fade animation
    const handleDaySelect = (day) => {
        setFade(true);
        setTimeout(() => {
            setSelectedDay(day);
            setFade(false);
        }, 300); // Match duration with CSS transition time
    };

    return (
        <div className='w-screen bg-gray-100'>
            <Navbar />
            <div className='w-full p-12'>
                <h1 className='text-8xl font-light text-blue-300'>DEET Schedule</h1>
                <h1 className='mt-12 font-semibold text-4xl'>Nov 2024</h1>

                {/* Day Selection Buttons */}
                <div className='flex items-center mt-4'>
                    {[11, 12, 13].map(day => (
                        <div
                            key={day}
                            onClick={() => handleDaySelect(day)}
                            className={`text-blue-300 hover:text-white shadow-xl mr-4 h-16 w-16 bg-gray-500 hover:bg-blue-300 rounded-full flex justify-center items-center duration-200 cursor-pointer ${selectedDay === day ? 'bg-blue-300 text-white scale-110' : ''
                                }`}
                        >
                            <h1 className='font-bold text-3xl'>{day}</h1>
                        </div>
                    ))}
                </div>

                {/* Render schedule based on the selected day */}
                <div className={`p-8 rounded-2xl flex flex-col items-start border-[2px] bg-white border-gray-100 mt-8 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className='bg-blue-400 text-2xl text-white font-light rounded-lg p-2 px-3'>Morning Sessions</h1>
                    <div className='mt-2 flex items-center'>
                        <h1 className='text-2xl text-gray-400'>{schedule[selectedDay].day}</h1>
                        <h1 className='text-6xl relative -top-4 mx-4 text-gray-400'>.</h1>
                        <h1 className='text-2xl text-gray-400'>{schedule[selectedDay].sessions.morning.time}</h1>
                    </div>

                    {/* Morning Events */}
                    {schedule[selectedDay].sessions.morning.events.map((event, idx) => (
                        <div key={idx} className='my-4'>
                            <h1 className='text-2xl text-gray-500'>{event.title}</h1>
                            <div className='flex items-start mt-4'>
                                <div className='h-24 w-24 rounded-full bg-blue-300 mr-4'></div>
                                <div>
                                    <h1 className='text-xl mt-2'>{event.speaker}</h1>
                                    <h1 className='text-lg font-light text-gray-400'>{event.designation}</h1>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h1 className='bg-blue-400 text-2xl text-white font-light rounded-lg p-2 px-3'>Afternoon Sessions</h1>
                    <div className='mt-2 flex items-center'>
                        <h1 className='text-2xl text-gray-400'>{schedule[selectedDay].day}</h1>
                        <h1 className='text-6xl relative -top-4 mx-4 text-gray-400'>.</h1>
                        <h1 className='text-2xl text-gray-400'>{schedule[selectedDay].sessions.afternoon.time}</h1>
                    </div>

                    {/* Afternoon Events */}
                    {schedule[selectedDay].sessions.afternoon.events.map((event, idx) => (
                        <div key={idx} className='my-4'>
                            <h1 className='text-2xl text-gray-500'>{event.title}</h1>
                            <div className='flex items-start mt-4'>
                                <div className='h-24 w-24 rounded-full bg-blue-300 mr-4'></div>
                                <div>
                                    <h1 className='text-xl mt-2'>{event.speaker}</h1>
                                    <h1 className='text-lg font-light text-gray-400'>{event.designation}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Schedule
