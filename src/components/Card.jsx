import Image from 'next/image';
import React from 'react';

const Card = ({ friend }) => {
    console.log(friend.picture);
    return (
        <div className='w-[259.5px] shadow-sm rounded-md p-6 flex flex-col items-center justify-center'>
            <Image
                className='rounded-full w-20 h-20 object-cover mb-2'
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}>
            </Image>
            <h2 className='font-semibold'>{friend.name}</h2>
            <p className='text-black/50'>{friend.days_since_contact}d ago</p>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex gap-2'>
                    {
                        friend.tags.map((tag, index) => <div key={index} className="badge bg-[#CBFADB] rounded-full">{tag}</div>)
                    }
                </div>
                <div className={`badge rounded-full ${
                    friend.status === 'almost due' ? 'bg-[#EFAD44] text-white' : 
                    friend.status === 'overdue' ? 'bg-[#EF4444] text-white' : 
                    friend.status === 'on-track' ? 'bg-[#244D3F] text-white' : ''
                }`}>{friend.status}</div>
            </div>
        </div>
    );
};

export default Card;