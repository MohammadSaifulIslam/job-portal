// import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid';
import bannerImg from '../../../assets/images/banner-1.webp';
const Banner = () => {
    return (
        <div className='my-10'>
            <div className='px-5 max-w-7xl md:mx-auto grid lg:grid-cols-2 gap-6'>
                <div className="banner-text  flex flex-col justify-center text-left">
                    <h4 className='font-semibold text-xl'>Helping you to find any type of job</h4>
                    <h1 className='font-bold text-5xl leading-[60px] mt-5'>Find Your <br /> Dream <br />
                        Job Today</h1>

                    <div className='flex gap-4 mt-5'>
                        <input type="text" placeholder='Job Title' className='my-input' />
                        <input type="text" placeholder='Job Title' className='my-input' />
                    </div>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="" className='w-3/4 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;