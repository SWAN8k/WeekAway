import React from 'react'

function Contact() {
    return (
        <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 text-2xl'>Send us a message</h2>
            <p className='text-center text-gray-700 py-2 font-medium'>We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img
                    className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-xl'
                    src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=60" alt="/" />
                <form className=''>
                    <div className="grid grid-cols-2">
                        <input className='border m-2 p-2 rounded-md' type="text" placeholder='First Name' />
                        <input className='border m-2 p-2 rounded-md' type="text" placeholder='Last Name' />
                        <input className='border m-2 p-2 rounded-md' type="email" placeholder='Email' />
                        <input className='border m-2 p-2 rounded-md' type="tel" placeholder='Phone' />
                        <input className='border col-span-2 p-2 m-2 rounded-md' type="text" placeholder='Address' />
                        <textarea className='border col-span-2 m-2 p-2 rounded-md' cols="30" rows="10"></textarea>
                        <button className='col-span-2 rounded-md font-semibold m-2'>Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
