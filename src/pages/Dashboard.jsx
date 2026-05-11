import Labels from '@/components/Labels';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Dashboard = () => {
    return (
        <div className='container mx-auto my-20'>
             <div className='flex flex-col items-center justify-center gap-5'>
                <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='flex items-center justify-center gap-1 btn bg-[#244D3F] text-white'><FiPlus className='text-xl'/>Add a Friend</button>
            </div>
            <div className='max-w-277.5 mx-auto'>
                <Labels></Labels>
                 <div className="divider"></div>
            </div>
        </div>
    );
};

export default Dashboard;