'use client';

import { PiArchiveLight } from 'react-icons/pi';
import { RiDeleteBin6Line, RiNotificationSnoozeFill } from 'react-icons/ri';

const FriendActionsClient = ({ currentFriend }) => {
    const handleSnooze = () => {
        console.log('Snooze for 2 weeks');
    };

    const handleArchive = () => {
        console.log('Archive friend:', currentFriend.id);
    };

    const handleDelete = () => {
        console.log('Delete friend:', currentFriend.id);
    };

    return (
        <div className='space-y-3 mt-4'>
            <div className='py-4 flex items-center justify-center bg-white shadow rounded-md'>
                <button onClick={handleSnooze} className='flex justify-center items-center font-medium gap-2'>
                    <RiNotificationSnoozeFill className='text-xl' />
                    Snooze 2 weeks
                </button>
            </div>
            <div className='py-4 flex items-center justify-center bg-white shadow rounded-md'>
                <button onClick={handleArchive} className='flex justify-center items-center font-medium gap-2'>
                    <PiArchiveLight className='text-xl' />
                    Archive
                </button>
            </div>
            <div className='py-4 flex items-center justify-center bg-white shadow rounded-md text-red-500'>
                <button onClick={handleDelete} className='flex justify-center items-center font-medium gap-2'>
                    <RiDeleteBin6Line className='text-xl' />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FriendActionsClient;
