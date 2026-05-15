"use client";

import { useState } from "react";
import { IoCallSharp, IoChatbubblesSharp } from "react-icons/io5";
import { MdVideoCall } from 'react-icons/md';
import { useFriend } from '@/context/FriendContext';

const iconFor = (type) => {
    if (type === 'call') return <IoCallSharp className="text-4xl" />;
    if (type === 'text') return <IoChatbubblesSharp className="text-4xl" />;
    if (type === 'video') return <MdVideoCall className="text-4xl" />;
    return <IoCallSharp className="text-4xl" />;
};

const TimelinePage = () => {
    const { events } = useFriend();
    const [filter, setFilter] = useState('all');

    const filtered = events.filter(e => filter === 'all' ? true : e.type === filter);

    return (
        <div className="max-w-277.5 mx-auto my-5 md:my-20 space-y-6">
            <h2 className="font-bold text-3xl md:text-5xl">Timeline</h2>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select appearance-none text-black/50">
                <option value="all">Filter Timeline</option>
                <option value="call">Calls</option>
                <option value="text">Texts</option>
                <option value="video">Video</option>
            </select>

            <div className="space-y-4">
                {filtered.length === 0 && <p className="text-black/50">No events yet.</p>}
                {filtered.map((ev) => (
                    <div key={ev.id} className="flex items-center gap-4 rounded-lg shadow p-4">
                        {iconFor(ev.type)}
                        <div>
                            <h2 className="text-black/60"><span className="text-xl font-medium text-[#244D3F]">{ev.type === 'call' ? 'Call' : ev.type === 'text' ? 'Text' : 'Video'}</span> with {ev.friendName}</h2>
                            <p className="text-black/60 font-medium">{ev.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;