import friends from '@/data/friends.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PiArchiveLight } from 'react-icons/pi';
import { RiDeleteBin6Line, RiNotificationSnoozeFill } from 'react-icons/ri';

const FriendDetails = async ({ params }) => {
    const { id } = await params;
    const friend = friends.find((f) => f.id === id || f.id === parseInt(id));
    if (!friend) {
        return notFound();
    }
    return (
        <div className='max-w-277.5 mx-auto grid md:grid-cols-4 place-items-center gap-4 my-20'>
            <div className='max-w-87.5'>
                <div className='w-full shadow-sm rounded-md p-6 flex flex-col items-center justify-center'>
                    <Image
                        className='rounded-full w-20 h-20 object-cover mb-2'
                        src={friend.picture}
                        alt={friend.name}
                        width={80}
                        height={80}>
                    </Image>
                    <h2 className='font-semibold my-1'>{friend.name}</h2>
                    <div className='flex flex-col items-center gap-2'>
                        <div className={`badge rounded-full ${friend.status === 'almost due' ? 'bg-[#EFAD44] text-white' :
                            friend.status === 'overdue' ? 'bg-[#EF4444] text-white' :
                                friend.status === 'on-track' ? 'bg-[#244D3F] text-white' : ''
                            }`}>{friend.status}
                        </div>
                        <div className='flex gap-2'>
                            {
                                friend.tags.map((tag, index) => <div key={index} className="badge bg-[#CBFADB] rounded-full">{tag}</div>)
                            }
                        </div>
                    </div>

                    <div className='mt-2'>
                        <p className='text-center text-black/50 italic'>"{friend.bio}"</p>
                        <p className='text-center text-black/50 italic'><small>Preferred: email</small></p>
                    </div>

                </div>
                <div className='space-y-3 mt-4'>
                    <div className='py-4 flex items-center justify-center bg-white shadow rounded-md'><button className='flex justify-center items-center font-medium gap-2'><RiNotificationSnoozeFill className='text-xl' />Snooze 2 weeks</button></div>
                    <div className='py-4 flex items-center justify-center bg-white shadow rounded-md'><button className='flex justify-center items-center font-medium gap-2'><PiArchiveLight className='text-xl' />Archive</button></div>
                    <div className='py-4 flex items-center justify-center bg-white shadow rounded-md text-red-500'><button className='flex justify-center items-center font-medium gap-2'><RiDeleteBin6Line className='text-xl' />Delete</button></div>
                </div>
            </div>





            <div></div>
        </div>
    );
};

export default FriendDetails;