import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

import { useState } from "react";
import animationPicture from '../../assets/lottie/129467-job-hunting.json';

const PostJobPageHome = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
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
        <div className="py-20">
            <h2 className="text-5xl font-bold text-center mb-10">Post a Job</h2>

            <div className="my-container grid md:grid-cols-2 gap-6">
                <div className="">
                    <form className="border-2 border-black rounded-xl p-10" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder="Job title" {...register("title", { required: true })} className="input input-bordered w-full" required />

                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            isSearchable
                            placeholder="Select skills"
                            className="mt-5" />

                        <div className="flex gap-5 mt-5">
                            <input {...register("salary", { required: true })} className="input input-bordered w-full" placeholder="Salary" required type="number" />
                            <input {...register("vacancy", { required: true })} className="input input-bordered w-full" placeholder="Vacancy" type="number" required />
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <select {...register("status")} required className="select select-bordered w-full">
                                <option defaultValue={"Select Job Status"}>Select Job Status</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                            </select>
                            <select {...register("category")} required className="select select-bordered w-full">
                                <option defaultValue={'Select Category'}>Select Category</option>
                                <option value="Web Design">Web Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>

                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <input {...register("date", { required: true })} className="input input-bordered w-full" type="date" required />
                            <input {...register("email", { required: true })} className="input input-bordered w-full" placeholder="Your email" type="email" required />
                        </div>

                        <input {...register("photo", { required: true })} className="input input-bordered w-full mt-5" placeholder="Photo URL" type="url" required />

                        <textarea {...register("description", { required: true })}
                            className="textarea textarea-bordered mt-5 w-full" placeholder="Job Description"></textarea>

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className="btn mt-5 w-full" type="submit" />
                    </form>
                </div>
                <div>
                    <Lottie animationData={animationPicture} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default PostJobPageHome;