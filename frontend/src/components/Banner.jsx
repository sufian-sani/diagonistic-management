import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 py-2'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold'>
                    <p
                        style={{textDecoration: 'underline'}}
                    >ABOUT</p>
                </div>
                {/*<button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>*/}
            </div>
            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[570px] relative'>
                <p>
                    Healing Heaven is an online mental health therapy center dedicated to providing compassionate and accessible care to individuals facing mental health challenges. Our mission is to bring peace and balance to the lives of our clients by offering personalized therapy sessions from the comfort of their homes.
                    At Healing Heaven, we understand the importance of mental well-being and believe that everyone deserves access to quality care. Our team of licensed psychiatrists, counselors, and therapists specializes in a wide range of mental health issues, including anxiety, depression, stress, trauma, and more. We tailor our services to meet the unique needs of each individual, ensuring a safe, supportive, and non-judgmental space for healing. With easy-to-use online platforms, we offer flexible appointment scheduling and a secure environment for confidential video consultations. Whether you're a young adult facing life's challenges or someone struggling with long-term mental health issues, Healing Heaven is here to guide you toward a healthier, happier mind.
                    Our goal is simple: to help you find peace within and live a fulfilling, balanced life through expert care and empathetic support.
                </p>
            </div>
        </div>
    )
}

export default Banner