// import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/banner-1.webp';
const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-96px)] flex items-center py-20'>
            <div className='px-5 max-w-7xl md:mx-auto grid lg:grid-cols-2 gap-6'>
                <div className="banner-text  flex flex-col justify-center text-left">
                    <h4 className='font-semibold text-xl'>Helping you to find any type of job</h4>
                    <h1 className='font-bold text-5xl leading-[60px] mt-5'>Find Your <br /> Dream <br />
                        Job Today</h1>

                    <div className='flex gap-4 mt-5'>
                        <input type="text" placeholder='Job Title' className='my-input' />
                        <input type="text" placeholder='Job Category' className='my-input' />
                      <Link to='/allJobs'>
                      <button><MagnifyingGlassCircleIcon className='h-12 w-12 text-red-500'></MagnifyingGlassCircleIcon></button>
                      </Link>

                    </div>
                </div>
                <div className="banner-img mt-10 md:mt-0">
                    <img src={bannerImg} alt="" className='w-3/4 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;