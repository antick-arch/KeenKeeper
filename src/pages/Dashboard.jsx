import Labels from '@/components/Labels';
import { FiPlus } from 'react-icons/fi';
import { Suspense } from 'react';
import FriendsGrid from '@/components/FriendsGrid';


const Dashboard = () => {
    return (
        <div className='container mx-auto my-5 md:my-20'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h2 className='text-2xl text-center md:text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='flex items-center justify-center gap-1 btn bg-[#244D3F] text-white'><FiPlus className='text-xl' />Add a Friend</button>
            </div>
            <div className='max-w-277.5 mx-auto'>
                <Labels></Labels>
                <div className="divider"></div>
            </div>
            <h2 className='max-w-277.5 mx-auto text-2xl font-semibold pb-3'>Your Friends</h2>
            <Suspense
                fallback={
                    <div className='max-w-277.5 mx-auto py-10 flex items-center justify-center'>
                        <span className='loading loading-spinner loading-xl'></span>
                    </div>
                }
            >
                <FriendsGrid />
            </Suspense>
        </div>
    );
};

export default Dashboard;