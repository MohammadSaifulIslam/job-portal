import { useState } from "react";

const AvailableJobs = () => {
    const [status, setStatus] = useState(null)
    return (
       <div className="py-20 bg-[#dbe1e6]">
        <div className="my-container ">
        <h2 className="text-5xl font-bold text-center mb-10 ">Available Jobs</h2>
        <div className="space-x-1 text-center">
            <span onClick={()=> setStatus('onsite')} className={`py-3 px-5 bg-white font-medium cursor-pointer duration-500 ${status == 'onsite' && 'bg-red-500 text-white '}`}>Onsite</span>
            <span onClick={()=> setStatus('remote')} className={`py-3 px-5 bg-white font-medium cursor-pointer duration-500 ${status == 'remote' && 'bg-red-500 text-white '}`}>Remote</span>
        </div>
        </div>
       </div>
    );
};

export default AvailableJobs;