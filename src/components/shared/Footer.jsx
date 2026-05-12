import Image from 'next/image';
import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const FooterPage = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-277.5 mx-auto'>
                <div className='flex flex-col md:items-center md:justify-center space-y-6 pt-20'>
                    <Image src={'/assets/logo-xl.png'} alt='logo' width={412} height={61} className='w-auto h-auto'></Image>
                    <p className='text-white/70'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <h2 className='text-white/80 text-xl font-medium'>Social Links</h2>
                        <div className='flex items-center justify-center gap-2'>
                            <div className='rounded-full p-2.5 bg-white'>
                                <TbBrandInstagramFilled className='text-xl' />
                            </div>
                            <div className='rounded-full p-2.5 bg-white'>
                                <FaSquareFacebook className='text-xl' />
                            </div>
                            <div className='rounded-full p-2.5 bg-white'>
                                <FaXTwitter className='text-xl' />
                            </div>
                        </div>
                    </div>
                </div>

                <hr  className='text-white/10 my-7'/>

                <div className='flex lg:flex-row flex-col justify-between text-white/70 p-5 md:pb-7'>
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Privacy Policy </p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FooterPage;