'use client';

import React, { createContext, useContext, useState } from 'react';

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [friendData, setFriendData] = useState(null);

    return (
        <FriendContext.Provider value={{ friendData, setFriendData }}>
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
