import logo from './logo.svg';
import './App.css';

import calendar from './components/media/calendar.png';
import location from './components/media/location.png';
import nairobibg from './components/media/nairobibg.png';

function App() {
  return (
    <div className='nairobi w-screen h-screen flex flex-col  m-0 p-0'>
      <div className='w-full flex justify-between p-8 pl-16 items-start'>
        <div className='flex items-center'>
          <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Home</h1>
          <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Speakers</h1>
          <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Schedule</h1>
          <h1 className='cursor-pointer hover:border-b-2 border-white duration-200 px-1 mx-2 text-white'>Deal Room</h1>

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
  );
}

export default App;
