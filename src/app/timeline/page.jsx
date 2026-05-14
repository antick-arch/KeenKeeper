import { IoCallSharp } from "react-icons/io5";

const TimelinePage = () => {
    return (
        <div className="max-w-277.5 mx-auto my-20 space-y-6">
            <h2 className="font-bold text-5xl">Timeline</h2>
            <select defaultValue="Filter Timeline" className="select appearance-none text-black/50">
                <option disabled={true}>Filter Timeline</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
            <div className="flex items-center gap-4 rounded-lg shadow p-4">
                <IoCallSharp className="text-4xl"/>
                <div>
                    <h2 className="text-black/60"><span className="text-xl font-medium text-[#244D3F]">Video</span> with Aisha Patel</h2>
                    <p className="text-black/60 font-medium">March 23, 2026</p>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;