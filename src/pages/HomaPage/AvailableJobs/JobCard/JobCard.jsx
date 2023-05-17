import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { _id, title, salary, photo, status, vacancy } = job || {};
    return (
        <div className='p-5 shadow-xl grid md:grid-cols-2 gap-5 rounded-lg'>
            <figure className='rounded-lg w-full '><img className='object-cover w-full h-full rounded-lg' src={photo} alt="" /></figure>
            <div>
                <h4 className='font-extrabold text-2xl mt-7 mb-1'>{title}</h4>
                <div className='flex gap-5 my-4'>
                    <button className='btn-outlined'>{status}</button>
                </div>
                    <p className="font-medium">Vacancy: <span className="text-red-500">{vacancy}</span></p>
                     <p className="font-medium">Salary: : <span className="text-red-500">{salary}</span></p>

                <div className="justify-end">
                    <Link to={`/jobDetails/${_id}`} ><button className="my-btn mt-5">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;