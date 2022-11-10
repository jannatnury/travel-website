import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import close from '../../pages/assets/logos/close.png';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    return (
        <div className='fixed w-full h-24 shadow-xl z-[100]' >
            <div className='flex justify-between items-center w-full px-2 2xl:px-16 mt-5'>
                <div>
                    <h2>Travelicious</h2>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>trip</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>Blog</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>cONTACT</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>about</li>
                        </Link>
                        <Link href='/'>
                            <li className='text-sm ml-10 uppercase hover:border-b mt-3'>Login</li>
                        </Link>
                    </ul>
                    {/* LIst Ended */}
                    {/* Menu Icon */}
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* Small device navbar */}
            <div className='fixed top-0 left-0 w-full h-screen bg-black/60'>
                <div className='fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-white ease-in duration-500 p-10'>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <h2>Travelicious</h2>
                            <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b my-4 border-gray-300">
                            <p className='w-[85%] md:w-[90%] py-4'>Let's travel freely with us</p>
                        </div>
                    </div>
                    <div className=''>
                        <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>trip</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Blog</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>cONTACT</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>about</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Login</li>
                        </Link>                           
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;