import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import JobCard from "../HomaPage/AvailableJobs/JobCard/JobCard";

const AllJobsPageHome = () => {
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/allJobs/text`)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                setJobs(data)
            })
    }, [])
    return (
        <div className="my-container my-20">
            <div className="section-title text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Search and Find Job</h2>
                    <p>Most popular categories of portal, sorted by popularity</p>
                </div>
             <div className='flex gap-4 mt-5 p-5 rounded-xl shadow-xl bg-[#f9fcff] '>
                        <input type="text" placeholder='Job Title' className='my-input' />
                        <input type="text" placeholder='Job Category' className='my-input' />
                        <button><MagnifyingGlassCircleIcon className='h-12 w-12 text-red-500'></MagnifyingGlassCircleIcon></button>
                    </div>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-2 gap-5">
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

export default AllJobsPageHome;