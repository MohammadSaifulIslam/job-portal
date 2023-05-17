import { useEffect, useState } from "react";
import JobCard from "./JobCard/JobCard";

const AvailableJobs = () => {
    const [status, setStatus] = useState(null);
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/${status}`)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                setJobs(data)
            })
    }, [status])
    return (
        <div className="my-container py-20">
            <h2 className="text-5xl font-bold text-center mb-10 ">Available Jobs</h2>
            <div className="space-x-1 text-center">
                <span onClick={() => setStatus('Onsite')} className={` ${status == 'Onsite' ?'btn-active' : 'my-btn'}`}>Onsite</span>

                <span onClick={() => setStatus('Remote')} className={` ${status == 'Remote' ?'btn-active' : 'my-btn'}`}>Remote</span>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
            </div>
        </div>
    );
};

export default AvailableJobs;