import friends from '@/data/friends.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FriendActionsClient from '@/components/FriendActionsClient';
import FriendDetailsClient from '@/components/FriendDetailsClient';

const FriendDetails = async ({ params }) => {
    const { id } = await params;
    const currentFriend = friends.find((f) => f.id === id || f.id === parseInt(id));
    if (!currentFriend) {
        return notFound();
    }

    return (
        <div className='max-w-277.5 mx-auto my-20 flex flex-col md:flex-row gap-6'>
            <div className='max-w-87.5 mx-auto'>
                <div className='w-full shadow-sm rounded-md p-6 flex flex-col items-center justify-center'>
                    <Image
                        className='rounded-full w-20 h-20 object-cover mb-2'
                        src={currentFriend.picture}
                        alt={currentFriend.name}
                        width={80}
                        height={80}>
                    </Image>
                    <h2 className='font-semibold my-1'>{currentFriend.name}</h2>
                    <div className='flex flex-col items-center gap-2'>
                        <div className={`badge rounded-full ${currentFriend.status === 'almost due' ? 'bg-[#EFAD44] text-white' :
                            currentFriend.status === 'overdue' ? 'bg-[#EF4444] text-white' :
                                currentFriend.status === 'on-track' ? 'bg-[#244D3F] text-white' : ''
                            }`}>{currentFriend.status}
                        </div>
                        <div className='flex gap-2'>
                            {
                                currentFriend.tags.map((tag, index) => <div key={index} className="badge bg-[#CBFADB] rounded-full">{tag}</div>)
                            }
                        </div>
                    </div>

                    <div className='mt-2'>
                        <p className='text-center text-black/50 italic'>"{currentFriend.bio}"</p>
                        <p className='text-center text-black/50 italic'><small>Preferred: email</small></p>
                    </div>
                </div>
                <FriendActionsClient currentFriend={currentFriend} />
            </div>

            <div className='space-y-6'>
                <div className='grid md:grid-cols-3 gap-6'>
                    <div className='text-center bg-white shadow rounded-md px-5 py-8'>
                        <h2 className='text-3xl font-semibold'>62</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='text-center bg-white shadow rounded-md px-5 py-8'>
                        <h2 className='text-3xl font-semibold'>62</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='text-center bg-white shadow rounded-md px-5 py-8'>
                        <h2 className='text-3xl font-semibold'>62</h2>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                </div>
                <FriendDetailsClient currentFriend={currentFriend} />
            </div>
        </div>
    );
};

export default FriendDetails;