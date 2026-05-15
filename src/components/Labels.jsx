import React from 'react';
import friendsData from '@/data/friends.json';

const Labels = () => {
    const totalFriends = friendsData.length;
    const onTrack = friendsData.filter(friend => friend.status === 'on-track').length;
    const needAttention = friendsData.filter(friend => 
        friend.status === 'overdue' || friend.status === 'almost due'
    ).length;
    const interactionsThisMonth = friendsData.filter(friend => 
        friend.days_since_contact <= 30
    ).length;

    return (
        <div className='grid md:grid-cols-4 gap-4 my-10'>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>{totalFriends}</h2>
                <p className='text-xxl text-[#64748B]'>Total Friends</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>{onTrack}</h2>
                <p className='text-xxl text-[#64748B]'>On Track</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>{needAttention}</h2>
                <p className='text-xxl text-[#64748B]'>Need Attention</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>{interactionsThisMonth}</h2>
                <p className='text-xxl text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Labels;