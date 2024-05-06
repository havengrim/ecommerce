import React from 'react';
import styles from '../style'; 
import Navbar from './Navbar';
import { Badge } from "@/components/ui/badge"
import { bg } from '@/assets'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className='relative w-full py-4 px-4 bg-cover bg-center bg-no-repeat flex flex-col items-center sm:h-[80vh] h-[20vh]'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className='font-regular text-2xl sm:text-3xl'>WELCOME TO OUR</span>
          <span className='font-semibold text-3xl sm:text-5xl'>ELEGANT FURNITURE</span>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='text-center mt-4 sm:block hidden'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.paddingY} container mx-auto px-4 sm:px-6 lg:px-8 flex gap-4`}>
          <Card className='flex-1 rounded-none'>
              <CardHeader>
                <div className='flex justify-between'>
                <Badge className='bg-orange-600 rounded-md text-sm'>New</Badge>
                <span className='text-xl'>$50.00</span>
                </div>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
        </Card>
        <Card className='flex-1'>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
        </Card>

      </div>
    </div>
  );
};

export default Home;
