import React, { useState } from 'react';

import investor from './media/investor.png';
import investorimg from './media/investorimg.png';
import tick from './media/tick.png';
import entrepreneurImage from './media/entrepreneur.png';
import entrepreneurImg from './media/entre.png';

const DealroomPage = () => {
    const [activeTab, setActiveTab] = useState('Investor');

    return (
        <div className='w-full'>
            <div className='w-full bg-blue-300 p-4 px-8 sm:p-12 sm:px-16'>
                <h1 className='text-4xl sm:text-5xl text-white font-bold'>Welcome to the DEET Summit Deal Room</h1>
                <h1 className='text-white text-md sm:text-xl mt-8'>
                    Step into the AfriDES Deal Room, where visionaries meet opportunities. This exclusive environment is dedicated to facilitating high-impact interactions between investors and entrepreneurs.<br /><br />
                    Here, connections turn into collaborations and conversations lead to investments. Entrepreneurs, pitch your ventures to potential backers who are eager to support disruptive technologies and visionary projects. Investors, explore a curated selection of promising startups with the potential to reshape industries and drive digital transformation across Africa.<br /><br />
                    The AfriDES Deal Room is more than just a space; it's where the future of the digital economy is being written. Join us to network, negotiate, and make deals that will catalyze growth and success. Let's create the future together.
                </h1>
            </div>
            <div className='flex w-full justify-center my-8'>
                <h1
                    className={`mx-4 text-xl sm:text-2xl md:text-4xl font-semibold ${activeTab === 'Investor' ? 'text-[#1a1a1a] pb-3 border-b-2 border-b-[#1a1a1a]' : 'text-[#494949] pb-1 md:pb-3 border-b-2 hover:border-b-[#1a1a1a]'} duration-200 cursor-pointer`}
                    onClick={() => setActiveTab('Investor')}
                >
                    Investor
                </h1>
                <h1
                    className={`mx-4 text-xl sm:text-2xl md:text-4xl font-semibold ${activeTab === 'Entrepreneur' ? 'text-[#1a1a1a] pb-1 md:pb-3 border-b-2 border-b-[#1a1a1a]' : 'text-[#494949] pb-3 border-b-2 hover:border-b-[#1a1a1a]'} duration-200 cursor-pointer`}
                    onClick={() => setActiveTab('Entrepreneur')}
                >
                    Entrepreneur
                </h1>
            </div>

            {/* Conditionally Render Content */}
            {activeTab === 'Investor' ? (
                <div className='w-[95%] sm:w-[80%] mx-auto bg-[#0572BB] flex flex-col lg:flex-row h-'>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center items-start p-6'>
                        <img className='w-12 mt-8' src={investor} />
                        <h1 className='my-4 text-4xl text-white font-semibold'>As an Investor</h1>
                        <p className='text-white'>
                            Explore a curated selection of promising startups with the potential to reshape industries and drive digital transformation across Africa.
                        </p>
                        <button className='text-white border-white border-2 p-2 px-4 text-xl bg-white text-[#0572BB] duration-200 mt-8'>Shortlist as an Investor</button>
                    </div>
                    <div className='w-full lg:w-1/2 investor h-[400px]'>
                    </div>
                </div>
            ) : (
                <div className='w-[95%] sm:w-[80%] mx-auto bg-[#95d5b2] flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 flex flex-col justify-center items-start p-6'>
                        <img className='w-12 mt-8' src={entrepreneurImage} />
                        <h1 className='my-4 text-4xl text-white font-semibold'>As an Entrepreneur</h1>
                        <p className='text-white'>
                            Pitch your ventures to potential backers who are eager to support disruptive technologies and visionary projects.
                        </p>
                        <button className='text-white border-white border-2 p-2 px-4 text-xl bg-white text-[#95d5b2] duration-200 mt-8'>Shortlist as an Entrepreneur</button>
                    </div>
                    <div className='w-full lg:w-1/2 entrepreneur h-[400px]'>
                    </div>
                </div>
            )}

            <div className='mt-20 flex flex-col md:flex-row justify-center w-full'>
                <div className='w-full md:w-[50%] flex flex-col items-center p-8'>
                    <h1 className='text-4xl font-semibold'>
                        Why shortlist as {activeTab === 'Investor' ? 'an Investor' : 'an Entrepreneur'}
                    </h1>
                    <div className='mt-8'>
                        {activeTab === 'Investor' ? (
                            <>
                                <div className='flex h-[220px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>⁠Access to High-Growth Startups: Discover a curated selection of Africa’s most promising digital startups, ready to scale and innovate in the global market.</h1>
                                </div>
                                <div className='flex h-[180px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>⁠Exclusive Networking: Engage directly with visionary entrepreneurs, industry experts, and other investors in a setting designed for meaningful connections and strategic partnerships.
                                    </h1>
                                </div>
                                <div className='flex h-[180px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Tailored Investment Opportunities: Find investment opportunities that align with your interests and portfolio goals, from early-stage ventures to rapidly growing companies.
                                    </h1>
                                </div>
                                <div className='flex h-[180px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>⁠Insights into Emerging Markets: Gain first-hand insights into Africa’s rapidly evolving digital economy, with opportunities to invest in sectors poised for explosive growth.
                                    </h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>⁠Secure and Efficient Deal-Making: Benefit from a secure and confidential environment for discussing terms, negotiating deals, and finalizing investments efficiently.

                                    </h1>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex h-[180px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Direct Access to Investors: Pitch your innovative ideas directly to a room full of investors actively seeking opportunities in the digital space.
                                    </h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Market Validation and Feedback: Gain valuable feedback from industry experts and investors, helping to refine your business model and accelerate growth.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Strategic Partnerships: Explore opportunities for strategic collaborations that can propel your startup to new heights through investor networks and resources.
                                    </h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Visibility and Exposure: Increase your visibility within the industry by showcasing your startup at a premier event focused on Africa’s digital economy.
                                        d investors, helping to refine your business model and accelerate growth.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>⁠Potential for Funding: Secure the funding needed to take your startup to the next level, with investors who are ready to support high-impact ventures.
                                    </h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col items-center p-8'>
                    <h1 className='text-4xl font-semibold mr-auto'>How it Works</h1>
                    <div className='mt-8'>
                        {activeTab === 'Investor' ? (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Sign Up: Create an investor profile to gain access to the curated list of startups.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Explore: Browse through the startups, and use filters to find the most relevant opportunities.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Invest: Engage with entrepreneurs, negotiate terms, and make your investment.</h1>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Register: Sign up and create a compelling profile for your startup.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Pitch: Submit your pitch to attract the attention of potential investors.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>

                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Negotiate: Engage with investors, negotiate terms, and secure funding.</h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealroomPage;