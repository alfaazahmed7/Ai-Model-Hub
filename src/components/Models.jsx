import React, { use } from 'react';

const Models = ({ modelPromises }) => {
    const models = use(modelPromises);

    return (
        <div className='md:w-10/12 lg:w-8/12 mx-auto my-10'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className='text-2xl opacity-70'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {models.map(model =>
                    <div className='shadow-xl rounded-2xl border border-[#e5e5e5]'>
                        <div className='bg-gray-300 p-5 rounded-xl rounded-b-none'>
                            <img className='h-[120px] w-[120px] mx-auto rounded-4xl' src={model.image} alt={model.title} />
                        </div>
                        <div className='p-5'>
                            <h2 className='text-3xl font-semibold mb-3'>{model.title}</h2>
                            <p className='text-gray-400 mb-3 line-clamp-2'>{model.description}</p>
                            <div className='flex items-end gap-2 mb-3'>
                                <p className='text-2xl font-semibold'>${model.price}</p>
                                <p className='text-gray-400 font-medium'>/month</p>
                            </div>
                            <div>
                                <button className='bg-[#ef233c] w-full py-3 rounded-xl text-white font-semibold'>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Models;