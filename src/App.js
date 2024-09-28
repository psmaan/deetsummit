import React from 'react';
import './App.css';

import calendar from './components/media/calendar.png';
import location from './components/media/location.png';
import nairobibg from './components/media/nairobibg.png';

import quote from './components/media/quote.png'
import { useState, useRef } from 'react';

import ticket from './components/media/ticket.png';
import phone from './components/media/phone.png';
import email from './components/media/email.png';

function App() {

  const containerRef = useRef(null); // Reference to the container

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

  return (
    <div className='w-screen flex flex-col  m-0 p-0'>
      <div className='w-full min-h-screen nairobi'>
        <div className='w-full flex justify-between p-8 pl-16 items-start'>
          <div className='flex items-center'>
            <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Home</h1>
            <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Speakers</h1>
            <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Schedule</h1>
            <a href='' className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Deal Room</a>

          </div>
          <div className='  flex flex-col items-end justify-center'>
            <h1 className='text-8xl font-bold text-blue-100'>DEET 2025</h1>
            <button className='p-2 px-3 rounded-md bg-blue-600 text-white mx-2'>Sponsor Today</button>
          </div>

        </div>
        <div className='p-16 pt-0 w-4/5 relative -top-8'>
          <h1 className='text-8xl font-bold text-white'>Digital Excellence and Economy Summit</h1>
          <h1 className='text-4xl mt-4 font-bold text-gray-500'>March 2025</h1>
          <h1 className='text-6xl text-white font-light mb-8'>Nairobi, Kenya</h1>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </div>
      </div>
      <div className='w-full p-12 flex justify-center'>
        <div className='flex flex-col w-[40%] mr-8'>
          <h1 className='text-5xl'>What is the DEET Summit?</h1>
          <p className='mt-4'>The Digital Excellence and Emerging Technology Summit 2025 (DEET Summit 2025) is a dynamic 3-day event aimed at fostering digital innovation across Africa. Hosted in Nairobi, Kenya, this summit brings together key stakeholders, including thought leaders, innovators, policymakers, and entrepreneurs, to discuss the digital future of the continent. Through panels, workshops, and networking opportunities, the summit seeks to empower attendees with insights into cutting-edge technologies and strategies for overcoming Africa’s unique challenges.</p>
          <p className='mt-4'>
            From education and entrepreneurship to policy and funding, DEET Summit 2025 covers essential topics such as tech adoption, digital literacy, and sustainable development. The event is an unmissable opportunity for those passionate about advancing digital excellence and shaping the future of Africa’s digital economy.
          </p>
        </div>
        <div className='w-[40%] ml-8'>
          <div className='w-[400px] h-[500px] botswanabg rounded-2xl shadow-2xl'>

          </div>
        </div>
      </div>
      <div className='w-full flex p-12 flex-col items-center botswanabg'>
        <div className='border-2 border-gray-400 rounded-2xl shadow-xl flex flex-col w-[90%] items-center backdrop-blur-2xl p-8'>
          <div className='flex items-start rounded-xl shadow-xl bg-black/20 p-8 w-[80%]'>
            <img src={quote} />
            <h1 className='text-white/70 ml-4 font-light text-4xl text-center'>ADVANCING DIGITAL EXCELLENCE THROUGHOUT AFRICA</h1>
            <img className=' mt-auto rotate-180' src={quote}></img>
          </div>
          <h1 className='mt-8 text-2xl text-center text-gray-200'>The Digital Excellence and Emerging Technology Summit 2024 brings together global leaders, innovators, and experts to explore the cutting-edge advancements in digital technologies and their transformative impact on society, business, and governance. Held at the prestigious WWTH UN Law Center in New York, this summit will delve into the most pressing issues and opportunities in the digital world, with a focus on fostering sustainable development and economic growth.</h1>
        </div>




      </div>
      <div className='w-full p-12'>
        <h1 className='text-8xl font-light'>DEET Agenda</h1>
        <div className='mt-12 flex w-full '>
          <div
            className='w-[80%] overflow-x-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory'
            ref={containerRef}
          >
            <div className='flex'>
              {divs.map((div, idx) => (
                <div
                  key={div.id}
                  className={`h-[360px] bg-blue-400 rounded-2xl p-6 flex-shrink-0 w-[calc(32%)] snap-center ${idx !== divs.length - 1 ? 'mr-4' : '' // Add margin-right except for the last div
                    }`}
                >
                  <h1 className='text-2xl'>{div.content}</h1>
                  <h1 className='text-2xl font-semibold'>{div.title}</h1>
                  <ul className='list-disc ml-4'>
                    {div.points.map((point, idx) => (
                      <li className='text-sm' key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <button onClick={handleScrollLeft} className='mb-2 p-2 bg-gray-300 rounded'>Left</button>
            <button onClick={handleScrollRight} className='p-2 bg-gray-300 rounded'>Right</button>
          </div>
        </div>
      </div>
      <div className='bg-blue-950 p-12 w-full'>
        <h1 className='text-8xl font-light text-white'>DEET Speakers</h1>
        <div className='w-full grid grid-cols-4 gap-4 gapy-y-6  mt-12'>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
          </div>
          <div className='bg-[#ABCAE9] flex flex-col items-center rounded-2xl overflow-hidden'>
            <div className='h-60 w-full bg-gray-100'>
              <img />
            </div>
            <h1 className='text-4xl text-white/80 font-semibold text-center mt-4'>Speaker 1</h1>
            <h1 className='text-center text-2xl font-light mb-4 text-black/50'>Speaker Designation</h1>
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

      <div className='bg-blue-300 w-full p-12'>
        <h1 className='text-8xl font-light text-blue-950'>DEET Partners</h1>
        <div className='w-full grid mt-16 grid-cols-6 gap-8'>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
          <div className='bg-white h-40 w-40 flex justify-center items-center'>
            partner 1 logo
          </div>
        </div>
      </div>
      <div className='w-full p-12 flex justify-between bg-blue-950 h-[300px]'>
        <div className='flex flex-col items-start justify-between'>
          <h1 className='text-blue-100 font-light text-6xl'>Get in Touch with us</h1>
          <div>
            <div className='flex items-center'>
              <img className='mr-4 h-6 w-6' src={phone} />
              <h1 className='text-xl text-white'>+1 999-888-XXX</h1>
            </div>
            <div className='flex items-center'>
              <img className='mr-4 h-6 w-6' src={phone} />
              <h1 className='text-xl text-white'>+1 999-888-XXX</h1>
            </div>
            <div className='flex items-center'>
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
}

export default App;
