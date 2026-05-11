import React from 'react';

const Labels = () => {
    return (
        <div className='grid grid-cols-4 gap-4 my-10'>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>32</h2>
                <p className='text-xxl text-[#64748B]'>Total Friends</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>3</h2>
                <p className='text-xxl text-[#64748B]'>On Track</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>6</h2>
                <p className='text-xxl text-[#64748B]'>Need Attention</p>
            </div>
            <div className='shadow-sm rounded-sm flex flex-col items-center justify-center py-8 gap-1'>
                <h2 className='text-3xl font-semibold text-[#244D3F]'>12</h2>
                <p className='text-xxl text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Labels;