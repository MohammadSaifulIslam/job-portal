import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid';
import bannerImg from '../../../assets/images/banner-main.png';
const Banner = () => {
    return (
        <div className=' bg-black bg-opacity-90 '>
            <div className='px-5 max-w-7xl md:mx-auto grid lg:grid-cols-2 gap-6'>
                <div className="banner-text flex flex-col justify-center text-white text-left">
                    <h4 className='font-semibold text-xl'>Helping you to find any type of job</h4>
                    <h1 className='font-bold text-7xl leading-[80px] mt-5'>Find Your <br /> Dream <br />
                        Job Today</h1>

                    <div className='mt-5 grid grid-cols-2 md:grid-cols-4  divide-y-2 md:divide-y-0 divide-x-2 divide-black rounded-md bg-white text-black text-center '>
                        <div className='flex gap-3  justify-center py-7'>
                            <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
                            <p>Search</p>
                        </div>
                        <div className='flex gap-3 justify-center py-7'>
                            <MapPinIcon className="h-6 w-6 text-blue-500" />
                            <p>Loacation</p>
                        </div>
                        <div className='flex gap-3 justify-center py-7'>
                            <TagIcon className="h-6 w-6 text-blue-500" />
                            <p>Category</p>
                        </div>
                        <div className='flex gap-3 justify-center py-7 '>
                            <AdjustmentsVerticalIcon className="h-6 w-6 text-blue-500" />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;