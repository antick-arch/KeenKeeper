import Card from '@/components/Card';

const getFriends = async () => {
    const data = await import('@/data/friends.json');
    return data.default;
};

const FriendsGrid = async () => {
    const friends = await getFriends();

    return (
        <div className='max-w-277.5 mx-auto grid md:grid-cols-4 place-items-center gap-4'>
            {friends.map((friend) => (
                <Card key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default FriendsGrid;
