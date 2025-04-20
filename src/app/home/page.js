import React from 'react';
import Capsules from './components/Capsules';
import Launches from './components/Launches';
import Link from 'next/link';
import History from './components/History';


const page = () => {
  return (
    <div className="bg-black min-h-screen p-6">
    <div className="grid grid-cols-3 gap-14 w-full">
      {/* Left Column */}
      <div>
        <Link href={'/Capsules'}>
        <Capsules />
        </Link>
        
      </div>

      {/* Middle Column */}
     
      <div>
      <Link href={'/Launches'}>
        <Launches />
        </Link>
      </div>
     

      {/* Right Column */}
      
      <div>
        <History/>
      </div>
     
    </div>
    </div>
  );
};

export default page;
