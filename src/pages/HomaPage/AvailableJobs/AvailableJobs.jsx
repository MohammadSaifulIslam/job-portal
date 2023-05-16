import { useEffect, useState } from "react";
import JobCard from "./JobCard/JobCard";

const AvailableJobs = () => {
    const [status, setStatus] = useState(null);
    const [jobs, setJobs] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/${status}`)
            .then(res => res.json())
            .then(data => {
                console.log({data})
                setJobs(data)
            })
    }, [status])
    return (
        <div className="py-20 bg-[#dbe1e6]">
            <div className="my-container ">
                <h2 className="text-5xl font-bold text-center mb-10 ">Available Jobs</h2>
                <div className="space-x-1 text-center">
                    <span onClick={() => setStatus('Onsite')} className={`py-3 px-5 bg-white font-medium cursor-pointer duration-500 ${status == 'Onsite' && 'bg-blue-600 text-white'}`}>Onsite</span>
                    <span onClick={() => setStatus('Remote')} className={`py-3 px-5 bg-white font-medium cursor-pointer duration-500 ${status == 'Remote' && 'bg-blue-600 text-white'}`}>Remote</span>
                </div>
                <div className="mt-10 grid gap-5">
                    {
                        jobs.map(job=> <JobCard
                        key={job._id}
                        job={job}
                        ></JobCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableJobs;