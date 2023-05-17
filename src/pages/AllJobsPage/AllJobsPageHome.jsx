import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "../HomaPage/AvailableJobs/JobCard/JobCard";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";

const AllJobsPageHome = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // pagination state 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // pagiation data load
    const { totalJobs } = useLoaderData();

    // pagination
    const totalPage = Math.ceil(totalJobs / itemsPerPage);

    const pageNumbers = [...Array(totalPage).keys()]
    console.log({ pageNumbers })

    // pagination: load data by using current page and itemsPerPage 
    useEffect(() => {

        fetch(`http://localhost:5000/jobs?page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setIsLoading(false)

            })
    }, [currentPage]);


    // seacrh jobs by title and category
    const [searchText, setSearchText] = useState('');
    const handleSearchJobs = () => {
        console.log({ searchText });
        fetch(`http://localhost:5000/getJobsBySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setIsLoading(false)
            })
    }


    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="my-container my-20">
            <div className="section-title text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Search and Find Job</h2>
                <p>Most popular categories of portal, sorted by popularity</p>
            </div>
            <div className='flex gap-4 mt-5 p-5 items-center rounded-xl shadow-xl bg-[#f9fcff] '>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Job Title or Job Category' className='my-input' />
                {/* <span className="text-red-500 text-lg">or</span>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Job Category' className='my-input' /> */}
                <button onClick={handleSearchJobs}><MagnifyingGlassCircleIcon className='h-12 w-12 text-red-500'></MagnifyingGlassCircleIcon></button>
            </div>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
            </div>

            {
                jobs.length === 0 && <div>
                    <p className=" text-xl font-semibold text-center text-red-500">No jobs found</p>
                </div>
            }

            {/* pagination */}
            <div className="text-center text-lg font-medium my-10 space-x-5">
                {
                    jobs.length === 4 &&
                    pageNumbers.map(number => <button
                        key={number}
                        onClick={() => setCurrentPage(number + 1)}
                        className={`border border-red-500 h-8 w-8 rounded-full duration-300 ${currentPage === number + 1 && 'bg-red-500 h-8 w-8 rounded-full text-white'}`}>
                        {number + 1}
                    </button>)
                }

            </div>
        </div>
    );
};

export default AllJobsPageHome;