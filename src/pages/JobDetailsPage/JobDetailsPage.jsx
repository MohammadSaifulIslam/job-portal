import { Link, useLoaderData } from "react-router-dom";

const JobDetailsPage = () => {
    const jobDetailsData = useLoaderData();
    const { title, jobDetails, salary, photo, status, vacancy, skills, category } = jobDetailsData;
    return (
        <div className="py-20 bg-[#f9fcff]">
            <div className="my-container ">
                <div className="section-title text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Job Details</h2>
                    <p>Most popular categories of portal, sorted by popularity</p>
                </div>
                <div className='p-10 bg-white shadow-xl rounded-xl grid md:grid-cols-2 gap-5'>
                    <figure className='rounded-lg w-full h-[300px] md:h-full'><img className='object-cover w-full h-full rounded-lg' src={photo} alt="" /></figure>
                    <div>
                        <h4 className='font-extrabold text-2xl mt-7 mb-1'>{title}</h4>
                        <div className='flex gap-5 my-4'>
                            <button className='btn-outlined'>{category}</button>
                            <button className='btn-outlined'>{status}</button>
                        </div>
                        <div className=' space-x-4'>
                            <span >Vacancy: {vacancy}</span> <span>Salary: {salary}</span>
                        </div>
                        <p className="text-lg font-semibold mt-3">Requirement skills:</p>
                        <div>
                            {
                                skills.map((skill, index) => <p
                                    key={index}
                                >{index + 1} . {skill?.value}</p>)
                            }
                        </div>
                        <p className="mt-3"><span className="text-lg font-semibold  ">Job Details:</span> {jobDetails}</p>
                        <div className="justify-end">
                            <button className="my-btn mt-5">Apply Now</button>
                            <Link to='/'><button className="my-btn mt-5 ml-5">Home to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;