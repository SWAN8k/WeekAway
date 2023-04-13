import React from 'react'

function Hero() {
    return (
        <div className='w-full h-[90vh]'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1619118986411-29b465253365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA0fHxzcGlhZ2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2070&q=60" alt="/" />

            <div className="max-w-[1148px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                    <p className='font-semibold text-gray-700'>
                        Our travel booking agency offers a complete service to plan your
                        next vacation. Choose from a wide range of destinations and
                        customized packages to meet your needs.
                        Book hotels and activities with us for a stress-free travel
                        experience.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero
