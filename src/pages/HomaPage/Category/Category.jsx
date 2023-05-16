import { BriefcaseIcon, HomeIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";

const Category = () => {

    return (
        <div className="bg-[#484848] py-20 px-5">
            <div className="my-container ">
                <h2 className="text-5xl font-bold text-center mb-10 text-white">Category</h2>
                <div className="grid md:grid-cols-4 gap-5 text-center">
                    <div className="p-10 rounded-lg bg-[#a0a0a0] flex flex-col  items-center text-lg font-semibold">
                   
                        <BriefcaseIcon className="h-16 w-16 "></BriefcaseIcon>
               
                        Onsite
                    </div>
                    <div className="p-10 rounded-lg bg-[#a0a0a0] flex flex-col  items-center text-lg font-semibold">
                        <HomeIcon className="h-16 w-16"></HomeIcon>
                        Remote
                    </div>
                    <div className="p-10 rounded-lg bg-[#a0a0a0] flex flex-col  items-center text-lg font-semibold">
                        <UserGroupIcon className="h-16 w-16"></UserGroupIcon>
                        Fulltime
                    </div>
                    <div className="p-10 rounded-lg bg-[#a0a0a0] flex flex-col  items-center text-lg font-semibold">
                        <UserIcon className="h-16 w-16"></UserIcon>
                        Parttime
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;