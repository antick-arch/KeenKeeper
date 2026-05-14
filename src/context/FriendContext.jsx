'use client';

import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [friendData, setFriendData] = useState(null);
    const [events, setEvents] = useState([]);

    const addEvent = (ev) => {
        setEvents((prev) => [ev, ...prev]);
    };

    const addEventForFriend = (type, friend) => {
        const ev = {
            id: Date.now(),
            type,
            friendId: friend.id,
            friendName: friend.name,
            date: new Date().toISOString(),
        };
        addEvent(ev);

        if (type === 'call') {
            toast.success(`Calling ${friend.name} now`);
            return;
        }

        if (type === 'text') {
            toast.info(`Text message ready for ${friend.name}`);
            return;
        }

        if (type === 'video') {
            toast.info(`Starting a video check-in with ${friend.name}`);
        }
    };

    const clearEvents = () => {
        setEvents([]);
    };

    return (
        <FriendContext.Provider value={{ friendData, setFriendData, events, addEventForFriend, clearEvents }}>
            {children}
        </FriendContext.Provider>
    );
};

export const useFriend = () => {
    const context = useContext(FriendContext);
    if (!context) {
        throw new Error('useFriend must be used within a FriendProvider');
    }
    return context;
};
