
import PieChartWithPaddingAngle from '@/components/PieChartWithPaddingAngle';

const StatsPage = () => {
    return (
        <div className="max-w-277.5 mx-auto my-20">
            <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className='font-medium text-xl'>By Interaction Type</h2>
                <PieChartWithPaddingAngle />
            </div>
        </div>
    );
};

export default StatsPage;