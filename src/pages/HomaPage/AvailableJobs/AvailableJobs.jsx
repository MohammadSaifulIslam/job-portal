import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard/JobCard";

const AvailableJobs = () => {
    const [status, setStatus] = useState(null);
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/${status}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [status])
    return (
        <div className="my-container py-20">
            <div className="section-title text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Availabe Jobs</h2>
                <p>Hand-picked jobs featured depending on popularity and benifits</p>
            </div>
            <div className="space-x-1 text-center">
                <span onClick={() => setStatus('Onsite')} className={` ${status == 'Onsite' ? 'btn-active' : 'my-btn'}`}>Onsite</span>

                <span onClick={() => setStatus('Remote')} className={` ${status == 'Remote' ? 'btn-active' : 'my-btn'}`}>Remote</span>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    jobs.slice(0, 4).map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
            </div>
            <div className=" mt-10 text-center">
                <Link to='/allJobs'><button className="my-btn">Browse all Jobs</button></Link>
            </div>
        </div>
    );
};

export default AvailableJobs;