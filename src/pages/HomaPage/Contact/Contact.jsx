
import { toast } from 'react-hot-toast';
import contactImage from '../../../assets/images/contact.webp';
const Contact = () => {
    const handleSendMessage = event => {
        event.preventDefault();
        toast.success('Successfully send message!')
        event.target.reset()
    }
    return (
        <div className='my-container mb-20'>
            <div className="section-title text-center mb-10">
                <h5 className='text-3xl font-bold mb-2'>Get Touch With Us</h5>
                <p className='md:w-1/2 mx-auto'> This section is designed to make it easy for customers to make reservations, ask questions, or provide feedback about their dining experience.</p>
            </div>
            <div className=' grid md:grid-cols-2 gap-5 items-center'>
                <div>
                    <img src={contactImage} alt="" />
                </div>
                <form onSubmit={handleSendMessage} className=''>
                    <input type="text" placeholder="Your name" className="input input-bordered border-2 border-red-500 bg-slate-50 w-full focus:outline-none" required />
                    <input type="email" placeholder="Your email" className="input input-bordered border-2 border-red-500 bg-slate-50 w-full focus:outline-none mt-5" required />
                    <input type="number" placeholder="Your phone number" className="input input-bordered border-2 border-red-500 bg-slate-50 w-full focus:outline-none mt-5" required />
                    <textarea className="textarea h-40 textarea-bordered border-2 border-red-500 bg-slate-50 w-full focus:outline-none mt-5" placeholder="Your message" required></textarea>
                    <button className='my-btn text-start mt-4'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;