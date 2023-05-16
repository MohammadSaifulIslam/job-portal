import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { _id, title, salary, photo, status, vacancy, skills ,category} = job || {};
    return (
        <div className='p-10 border border-black rounded-xl grid md:grid-cols-2 gap-5'>
            <figure className='rounded-lg w-full h-[300px] md:h-[400px]'><img className='object-cover w-full h-full rounded-lg' src={photo} alt="" /></figure>
            <div>
                <h4 className='font-extrabold text-2xl mt-7 mb-1'>{title}</h4>
                <div className='flex gap-5 my-4'>
                    <button className='btn-outlined'>{category}</button>
                    <button className='btn-outlined'>{status}</button>
                </div>
                <div className=' space-x-4'>
                    <span >Vacancy: {vacancy}</span> <span>Salary: ${salary}</span>
                </div>
                <p className="text-lg font-semibold mt-3">Requirement skills:</p>
                <div>
                    {
                        skills.slice(0, 5).map((skill, index) => <p
                            key={index}
                        >{index + 1} . {skill?.value}</p>)
                    }
                </div>
                <div className="justify-end">
                    <Link to={`/jobDetails/${_id}`} ><button className="btn mt-5">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;