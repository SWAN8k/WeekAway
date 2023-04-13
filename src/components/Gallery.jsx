import React from 'react'

function Gallery() {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 p-4 text-4xl'>Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">

                <div className="sm:col-span-2 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl' src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://images.unsplash.com/photo-1585544314038-a0d3769d0193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://images.unsplash.com/photo-1559599746-8823b38544c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

                <div className="">
                    <img className='w-full h-full object-cover rounded-lg shadow-xl ' src="https://plus.unsplash.com/premium_photo-1669748156838-33fda144e8dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=88" alt="/" />
                </div>

            </div>
        </div>
    )
}

export default Gallery
