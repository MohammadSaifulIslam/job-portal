import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import postImage from '../../assets/images/postImage.webp';

const PostJobPageHome = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.skills = selectedOption;
        console.log(data)
        fetch('http://localhost:5000/postJob', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };


    const options = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React', label: 'React' },
        { value: 'Node', label: 'Node' },
        { value: 'MongoDB', label: 'MongoDB' },
        { value: 'Express', label: 'Express' },
        { value: 'Python', label: 'Python' },
        { value: 'Java', label: 'Java' },
        { value: 'C++', label: 'C++' },
        { value: 'Redux', label: 'Redux' },
        { value: 'Next JS', label: 'Next JS' },
        { value: 'Git', label: 'Git' },
    ]

    return (
        <div className="py-20 bg-[#f9fcff]">
            <h2 className="text-5xl font-bold text-center mb-10">Post a Job</h2>

            <div className="my-container grid md:grid-cols-2 gap-6 ">
                <div className="">
                    <form className="border-2 border-red-500 bg-white rounded-xl p-10" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder="Job title" {...register("title", { required: true })} className='my-input' required />

                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            isSearchable
                            placeholder="Select skills"
                            className="mt-5" />

                        <div className="flex gap-5 mt-5">
                            <input {...register("salary", { required: true })} className='my-input' placeholder="Salary" required type="number" />
                            <input {...register("vacancy", { required: true })} className='my-input' placeholder="Vacancy" type="number" required />
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <select {...register("status")} required className='my-input'>
                                <option defaultValue={"Select Job Status"}>Select Job Status</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                            </select>
                            <select {...register("category")} required className='my-input'>
                                <option defaultValue={'Select Category'}>Select Category</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>

                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <input {...register("date", { required: true })} className='my-input' type="date" required />
                            <input {...register("email", { required: true })} className='my-input' placeholder="Your email" type="email" required />
                        </div>

                        <input {...register("photo", { required: true })} className='my-input mt-5' placeholder="Photo URL" type="url" required />

                        <textarea {...register("description", { required: true })}
                            className='mt-5 my-input' placeholder="Job Description"></textarea>

                        <input className="my-btn mt-5 w-full" type="submit" />
                    </form>
                </div>
                <div className="flex items-center">
                    <img src={postImage} alt="post a job image" className="object-contain  w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default PostJobPageHome;