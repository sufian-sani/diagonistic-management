import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    // Function to handle the navigation to login page
    const handleOnlineAppointmentClick = () => {
        // Redirecting to the login page
        navigate('/login');
    };
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 home-banner'>

            {/* --------- Header Left --------- */}
            <div
                className='flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] items-center'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'
                >
                    PEACE FOR YOUR HEART
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    {/*<img className='w-28' src={assets.group_profiles} alt="" />*/}
                    <p>Healing heaven deals with the major number of people dealing with mental problem and issues. Our
                        motive is to relax the mind of youth through our psychiatrists </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={handleOnlineAppointmentClick} // Redirect to login page when clicked
                        className='banner-button text-[#fff] flex items-center gap-2 px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                        Online Appointment
                    </button>
                    <a href=''
                       className='banner-button text-[#fff] flex items-center gap-2 px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                        FACE TO FACE
                    </a>
                </div>
            </div>

            {/* --------- Header Right --------- */}
            {/*<div className='md:w-1/2 relative'>*/}
            {/*    <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />*/}
            {/*</div>*/}
        </div>
    )
}

export default Header