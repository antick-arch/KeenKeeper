'use client';

import { LuPhoneCall } from 'react-icons/lu';
import { PiChatTextBold, PiVideoCameraBold } from 'react-icons/pi';

const FriendDetailsClient = ({ currentFriend }) => {
    const handleCall = async (friend) => {
        console.log(friend);
    };

    const handleEdit = () => {
        console.log('Edit relationship goal');
    };

    const handleText = () => {
        console.log('Text:', currentFriend.id);
    };

    const handleVideo = () => {
        console.log('Video call:', currentFriend.id);
    };

    return (
        <>
            <div className='max-w-full bg-white shadow p-6 rounded-lg'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h2>
                    <button onClick={handleEdit} className='btn'>
                        Edit
                    </button>
                </div>
                <h2 className='text-black/50'>
                    Connect every <span className='font-bold text-black'>30 days</span>
                </h2>
            </div>
            <div className='rounded-lg bg-white max-w-full shadow p-6 space-y-4'>
                <h2 className='font-medium text-xl text-[#244D3F]'>Quick Check-In</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <button
                        onClick={() => handleCall(currentFriend)}
                        className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-md space-y-2'
                    >
                        <LuPhoneCall className='text-[26px] font-extrabold' />
                        <h2>Call</h2>
                    </button>
                    <button
                        onClick={handleText}
                        className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-md space-y-2'
                    >
                        <PiChatTextBold className='text-[26px] font-extrabold' />
                        <h2>Text</h2>
                    </button>
                    <button
                        onClick={handleVideo}
                        className='flex flex-col justify-center items-center p-4 bg-gray-100 rounded-md space-y-2'
                    >
                        <PiVideoCameraBold className='text-[26px] font-extrabold' />
                        <h2>Video</h2>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FriendDetailsClient;
