import React from 'react';
import styles from '../style'; // If you're using CSS modules
import Navbar from './Navbar';
import {bg} from '@/assets'; // Import the background image

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full py-4 px-4 sm:bg-cover bg-center bg-no-repeat flex' style={{ backgroundImage: `url(${bg})` }}>
            <div className='sm:flex-1 flex'>

            </div>
            <div className='flex flex-col  items-center sm:flex-1'>
                <div className='flex flex-col'>
                <span className=' font-regular text-[30px]'>WELCOME TO OUR</span>
                <span className='font-semibold text-[50px]'>ELEGANT FURNITURE</span>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text</p>
                </div>
            </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        hello
      </div>
    </div>
  );
}

export default Home;
