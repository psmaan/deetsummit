import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Schedule from './components/Schedule';

import calendar from './components/media/calendar.png';
import location from './components/media/location.png';
import nairobibg from './components/media/nairobibg.png';

import quote from './components/media/quote.png'
import { useState, useRef, useEffect } from 'react';

import ticket from './components/media/ticket.png';
import tick from './components/media/tick.png';
import phone from './components/media/phone.png';
import email from './components/media/email.png';
import linkedin from './components/media/linkedin.png';

import left from './components/media/leftarrow.png';
import right from './components/media/rightarrow.png';
import aboutimg from './components/media/aboutdges.jpeg';

function Homepage() {

    useEffect(() => {
        const textElements = document.querySelectorAll('.text-fade-in');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1 // 10% of the text is visible
            }
        );

        textElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on component unmount
        return () => {
            textElements.forEach(element => observer.unobserve(element));
        };
    }, []);

    useEffect(() => {
        // Handle text elements
        const textElements = document.querySelectorAll('.text-slide-in');
        const imageElements = document.querySelectorAll('.image-fade-in');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        textElements.forEach(el => observer.observe(el));
        imageElements.forEach(el => observer.observe(el));

        return () => {
            textElements.forEach(el => observer.unobserve(el));
            imageElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const containerRef = useRef(null);

    const divs = [
        {
            id: 1,
            content: '01',
            title: 'The Future of Digital Education in Africa',
            points: [
                'Integrating Digital Literacy into Curricula',
                'Leveraging EdTech to Overcome Educational Barriers',
                'Building Partnerships Between African and Global Educational Institutions',
                'Virtual Learning: Opportunities and Challenges in African Contexts'
            ]
        },
        {
            id: 2,
            content: '02',
            title: 'Research and Development in Emerging Technologies',
            points: [
                'Blockchain and Cryptocurrency in Africa: Research Opportunities',
                'Artificial Intelligence (AI) for Social Good in Africa',
                'Bridging the Research Gap: Collaborations Between African Universities and Global Institutions',
                'Data Science and Analytics: Applications and Impact in African Development'
            ]
        },
        {
            id: 3,
            content: '03',
            title: 'Digital Entrepreneurship and Innovation',
            points: [
                'Scaling Startups in Africa: Strategies for Growth and Sustainability',
                'Women in Tech: Empowering Female Entrepreneurs in the Digital Economy',
                'Navigating the African Tech Ecosystem: Opportunities and Challenges',
                'Case Studies of Successful African Tech Startups'
            ]
        },
        {
            id: 4,
            content: '04',
            title: 'Technology Adoption and Infrastructure Development',
            points: [
                '5G and Internet Connectivity: Transforming African Economies',
                'Smart Cities in Africa: Leveraging IoT for Urban Development',
                'Overcoming Infrastructure Challenges in Rural and Underserved Areas',
                'Cybersecurity: Protecting Africa’s Digital Future'
            ]
        },
        {
            id: 5,
            content: '05',
            title: 'Policy Advocacy and Governance',
            points: [
                'Crafting Policies for Digital Transformation in Africa',
                'Digital Identity and Data Privacy in Africa',
                'The Role of Governments in Promoting Tech Innovation',
                'Regulatory Frameworks for Emerging Technologies in Africa'
            ]
        },
        {
            id: 6,
            content: '06',
            title: 'Funding and Investment in Digital Initiatives',
            points: [
                'Venture Capital and Funding Opportunities for African Startups',
                'Crowdfunding and Alternative Financing Models for Tech Projects',
                'Public-Private Partnerships (PPP) in Advancing Digital Infrastructure',
                'Attracting Global Investment to Africa’s Tech Sector'
            ]
        },
        {
            id: 7,
            content: '07',
            title: 'Diaspora Engagement and Collaboration',
            points: [
                'The Role of the African Diaspora in Digital Development',
                'Building Bridges: Diaspora-Led Initiatives for African Tech Growth',
                'Diaspora Mentorship and Support Networks for African Entrepreneurs',
                'Success Stories: Diaspora Contributions to Africa’s Digital Economy'
            ]
        },
        {
            id: 8,
            content: '08',
            title: 'Social Impact of Emerging Technologies',
            points: [
                'Technology for Social Good: Addressing Africa’s Development Challenges',
                'Digital Health Innovations: Transforming Healthcare Delivery in Africa',
                'Technology in Agriculture: Empowering Farmers and Improving Food Security',
                'The Role of Technology in Achieving the Sustainable Development Goals (SDGs) in Africa'
            ]
        },
        {
            id: 9,
            content: '09',
            title: 'Building a Sustainable Digital Ecosystem',
            points: [
                'Creating a Green Digital Economy: Environmental Considerations',
                'Long-Term Strategies for Sustainable Tech Innovation in Africa',
                'Fostering an Inclusive Digital Economy: Bridging the Gender and Digital Divide',
                'Developing Local Talent for Africa’s Digital Future'
            ]
        },
        {
            id: 10,
            content: '10',
            title: 'Networking and Partnership Opportunities',
            points: [
                'Building Strategic Partnerships Between Africa and the Global Tech Community',
                'Collaborative Platforms for Innovation: How to Leverage Global Networks',
                'The Power of Collaboration: Case Studies of Successful Partnerships in Africa',
                'Best Practices for Effective Cross-Border Collaboration in Tech Projects'
            ]
        }
    ];


    const handleScrollLeft = () => {
        const container = containerRef.current;
        container.scrollBy({
            left: -(container.offsetWidth + 16), // Scroll by width + gap
            behavior: 'smooth'
        });
    };

    const handleScrollRight = () => {
        const container = containerRef.current;
        container.scrollBy({
            left: container.offsetWidth + 16, // Scroll by width + gap
            behavior: 'smooth'
        });
    };

    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const eventDate = new Date('2024-09-30');
            const currentDate = new Date();
            const timeDifference = eventDate - currentDate;
            const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            setDaysLeft(daysLeft);
        };

        calculateDaysLeft();

        const timer = setInterval(calculateDaysLeft, 86400000); // Update every 24 hours

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <div id='home' className='w-screen flex flex-col  m-0 p-0'>
            <div className='w-full min-h-screen nairobi'>
                <div className='w-full flex justify-between p-8 pl-16 items-start'>
                    <div className='flex items-center'>
                        <a href='#home' className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white text-fade-in text-fade-in-delay'>Home</a>
                        <a href='#speakers' className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white text-fade-in text-fade-in-delay'>Speakers</a>
                        <Link to='schedule' className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white text-fade-in text-fade-in-delay'>Schedule</Link>
                        <Link to="/dealroom" className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white text-fade-in text-fade-in-delay'>Deal Room</Link>
                    </div>

                    <div className='flex flex-col items-end justify-center'>
                        <h1 className='text-8xl font-bold text-blue-100 text-fade-in text-fade-in-delay'>DEET 2025</h1>
                        <button className='p-2 px-3 rounded-md bg-blue-600 text-white mx-2 text-fade-in text-fade-in-delay'>Sponsor Today</button>
                    </div>
                </div>

                <div className='p-16 pt-0 w-4/5 relative -top-8'>
                    <h1 className='text-8xl font-bold text-white text-fade-in text-fade-in-delay'>Digital Excellence and Economy Summit</h1>
                    <h1 className='text-4xl mt-4 font-bold text-gray-500 text-fade-in text-fade-in-delay'>November 2024</h1>
                    <h1 className='text-6xl text-white font-light mb-8 text-fade-in text-fade-in-delay'>Gaborone, Botswana</h1>
                    <button className='learn-more text-fade-in text-fade-in-delay'>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>
            </div>
            <div className='w-full p-12 flex justify-center'>
                {/* Left side with text */}
                <div className='flex flex-col w-[40%] mr-8'>
                    <h1 className='text-5xl text-slide-in'>What is the DEET Summit?</h1>
                    <p className='mt-4 text-slide-in'>The Digital Excellence and Emerging Technology Summit 2025 (DEET Summit 2025) is a dynamic 3-day event aimed at fostering digital innovation across Africa. Hosted in Nairobi, Kenya, this summit brings together key stakeholders, including thought leaders, innovators, policymakers, and entrepreneurs, to discuss the digital future of the continent. Through panels, workshops, and networking opportunities, the summit seeks to empower attendees with insights into cutting-edge technologies and strategies for overcoming Africa’s unique challenges.</p>
                    <p className='mt-4 text-slide-in'>From education and entrepreneurship to policy and funding, DEET Summit 2025 covers essential topics such as tech adoption, digital literacy, and sustainable development. The event is an unmissable opportunity for those passionate about advancing digital excellence and shaping the future of Africa’s digital economy.</p>
                </div>

                {/* Right side with image */}
                <div className='w-[40%] ml-8'>
                    <div className='w-[400px] h-[500px] overflow-auto rounded-2xl shadow-2xl aboutdges image-fade-in'></div>
                </div>
            </div>

            {/* Second section with the quote and additional text */}
            <div className='w-full flex p-12 flex-col items-center botswanabg'>
                <div className='border-2 border-gray-400 rounded-2xl shadow-xl flex flex-col w-[90%] items-center backdrop-blur-2xl p-8'>
                    {/* Text and images inside the card */}
                    <div className='flex items-start rounded-xl shadow-xl bg-black/20 p-8 w-[80%]'>
                        <img src={quote} className='image-fade-in' />
                        <h1 className='text-white/70 ml-4 font-light text-4xl text-center text-slide-in'>ADVANCING DIGITAL EXCELLENCE THROUGHOUT AFRICA</h1>
                        <img className='mt-auto rotate-180 image-fade-in' src={quote}></img>
                    </div>
                    <h1 className='mt-8 text-2xl text-center text-gray-200 text-slide-in'>The Digital Excellence and Emerging Technology Summit 2024 brings together global leaders, innovators, and experts to explore the cutting-edge advancements in digital technologies and their transformative impact on society, business, and governance. Held at the prestigious WWTH UN Law Center in New York, this summit will delve into the most pressing issues and opportunities in the digital world, with a focus on fostering sustainable development and economic growth.</h1>
                </div>
            </div>

            <div className='w-full p-12 bg-blue-200'>
                <h1 className='text-8xl font-light text-gray-700'>DEET Agenda</h1>
                <div className='mt-12 flex w-full '>
                    <div
                        className='w-[80%] overflow-x-hidden overflow-y-auto scroll-smooth scrollbar-hide snap-x snap-mandatory'
                        ref={containerRef}
                    >
                        <div className='flex'>
                            {divs.map((div, idx) => (
                                <div
                                    key={div.id}
                                    className={`h-[360px] bg-gray-600 rounded-2xl p-6 flex-shrink-0 w-[calc(32%)] snap-center ${idx !== divs.length - 1 ? 'mr-4' : '' // Add margin-right except for the last div
                                        }`}
                                >
                                    <h1 className='text-2xl text-white/30'>{div.content}</h1>
                                    <h1 className='text-2xl font-semibold text-white/80'>{div.title}</h1>
                                    <ul className='list-disc ml-4'>
                                        {div.points.map((point, idx) => (
                                            <li className='text-sm text-white/80' key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[20%] flex items-center justify-center'>
                        <div onClick={handleScrollLeft} className='mx-2 w-20 h-20 mb-2 p-2 bg-gray-600 flex justify-center items-center rounded-full'>
                            <img className='w-[90%]' src={left} />
                        </div>
                        <div onClick={handleScrollRight} className='mx-2 w-20 h-20 mb-2 p-2 bg-gray-600 flex justify-center items-center rounded-full'>
                            <img className='w-[90%]' src={right} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 p-12 w-full'>
                <h1 className='text-8xl font-light text-gray-700'>DEET Speakers</h1>
                <div className='w-full grid grid-cols-4 gap-4 gapy-y-6  mt-12'>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-white'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
                    </div>
                </div>
            </div>
            <div className='bg-white p-12 w-full'>
                <h1 className='text-8xl font-light text-blue-300'>DEET Hosts</h1>
                <div className='w-full grid grid-cols-4 gap-4 gapy-y-6  mt-12'>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-gray-100'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Host 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Host Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-gray-100'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Host 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Host Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-gray-100'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Host 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Host Designation</h1>
                    </div>
                    <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
                        <div className='h-60 w-full bg-gray-100'>
                            <img />
                        </div>
                        <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Host 1</h1>
                        <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Host Designation</h1>
                    </div>
                </div>
            </div>
            {/**
       *       <div className='p-12 w-full flex justify-between'>
        <div className=''>
          <h1 className='text-8xl font-light text-blue-950'>DEET Venue</h1>
          <h1 className='text-6xl font-semibold'>--- Hotels Botswana</h1>
          <div className='flex'>
            <button clas>Book Now</button>
            <button>Get Direction</button>
          </div>

        </div>
        <div className='w-1/3 rounded-xl overflow-hidden'>
          <img src={nairobibg} />
        </div>
      </div>
       */}
            <div className='w-full bg-blue-300 flex flex-col items-center py-12'>
                <h1 className='text-blue-500 font-bold text-6xl'>Buy Tickets</h1>
                <div className='h-2 w-40 bg-blue-600 rounded-full my-4'></div>
                <div className='flex flex-col lg:flex-row items-center mt-8'>
                    <div className='bg-black/10 h-[400px] lg:h-[630px] w-[360px] sm:w-[500px] lg:w-[300px] xl:w-[380px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4'>
                        <h1 className='text-white font-bold text-4xl'>Basic</h1>
                        <img className='w-[90px] my-2' src={ticket} alt='ticket'></img>
                        <div className='flex'>
                            <h1 className='text-4xl text-blue-500 font-bold ml-2'>$50</h1>
                        </div>
                        <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-blue-500 text-white hover:scale-110 duration-150 mb-8'>Buy Now</button>
                        <div className='flex flex-col items-start w-[95%]'>
                            <div className='flex items-center pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>Virtual participation to the event!</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black/10 h-[580px] lg:h-[680px] w-[360px] sm:w-[500px] lg:w-[300px] xl:w-[400px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4 relative'>
                        <h1 className='text-white font-bold text-4xl'>Standard</h1>
                        <img className='w-[90px] my-2' src={ticket} alt='ticket'></img>
                        <div className='flex'>
                            <h1 className='text-4xl text-blue-500 font-bold ml-2'>$200</h1>
                        </div>
                        <h1 className='text-2xl text-[#ffffff] font-light'>(25% off)</h1>
                        <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-blue-500 text-white hover:scale-110 duration-150 mb-8'>Buy Now</button>
                        <div className='flex flex-col items-start w-[95%]'>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Access to all keynote sessions and panel discussions.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Entry to the networking zone and exhibition hall.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>Swag bag with event materials and sponsor information.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>Access to city tour.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>VISA processing support</h1>
                            </div>
                            <div className='flex items-center pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Invitation to the Africa Business dinner with industry leaders.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black/10 h-[580px] lg:h-[650px] w-[360px] sm:w-[500px] lg:w-[320px] xl:w-[380px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4'>
                        <h1 className='text-white font-bold text-4xl'>Premium</h1>
                        <img className='w-[90px] my-2' src={ticket} alt='ticket'></img>
                        <div className='flex'>
                            <h1 className='text-4xl text-blue-500 font-bold ml-2'>$500</h1>
                        </div>
                        <h1 className='text-2xl text-[#ffffff] font-light'>(25% off)</h1>
                        <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-blue-500 text-white hover:scale-110 duration-150 mb-8'>Buy Now</button>
                        <div className='flex flex-col items-start w-[95%]'>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md  w-[90%]'>⁠All benefits of the Standard Ticket.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>Access to exclusive workshops and hands-on sessions.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠VIP seating for keynote sessions.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Tourism package with guided tours to major attractions.</h1>
                            </div>
                            <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Premium goodie bag with high-value items and exclusive event memorabilia</h1>
                            </div>
                            <div className='flex items-center pb-1 w-full my-1'>
                                <div className='w-5 h-5 bg-blue-500 rounded-full mr-3 flex justify-center items-center'>
                                    <img src={tick} className='h-[70%]' alt='tick'></img>
                                </div>
                                <h1 className='text-white font-light text-sm lg:text-md w-[90%]'>⁠Entry to the VIP networking lounge/deal room</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-full p-12'>
                <h1 className='text-8xl font-light text-blue-950'>DEET Partners</h1>
                <div className='w-full grid mt-16 grid-cols-6 gap-8'>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                    <div className='bg-blue-300 h-40 w-40 flex justify-center items-center'>
                        partner 1 logo
                    </div>
                </div>
            </div>
            <div className='w-full p-12 flex justify-between bg-gray-800 h-[300px]'>
                <div className='flex flex-col items-start justify-between'>
                    <h1 className='text-gray-100 font-semibold text-6xl'>Get in Touch with us</h1>
                    <div>
                        <div className='flex items-center my-2'>
                            <img className='mr-4 h-6 w-6' src={phone} />
                            <h1 className='text-xl text-white'>+1 999-888-XXX</h1>
                        </div>
                        <div className='flex items-center my-2'>
                            <img className='mr-4 h-6 w-6' src={phone} />
                            <h1 className='text-xl text-white'>+1 999-888-XXX</h1>
                        </div>
                        <div className='flex items-center my-2'>
                            <img className='mr-4 h-6 w-6' src={email} />
                            <h1 className='text-xl text-white'>info@hubfordigitalexcellence.com</h1>
                        </div>
                    </div>
                </div>
                <div className='flex h-full items-end'>
                    <div className='h-40 w-40 flex bg-white justify-center items-center mr-12'>
                        hfde logo
                    </div>
                    <div className='h-40 w-40 flex bg-white justify-center items-center'>
                        deet logo
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Homepage;
