import Image from 'next/image';
import React from 'react';

const Card = ({ friend }) => {
    console.log(friend.picture);
    return (
        <div className='w-[259.5px] shadow-sm rounded-md p-6 flex flex-col items-center justify-center'>
            <Image
                className='rounded-full w-20 h-20 object-cover'
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}>
            </Image>
            <h2>{friend.name}</h2>
            <p>{friend.days_since_contact}</p>
            <div className='flex flex-col gap-2'>
                <div className="badge badge-accent">Accent</div>
                <div className="badge badge-accent">Accent</div>
            </div>
        </div>
    );
};

export default Card;