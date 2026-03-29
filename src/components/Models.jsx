import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromises, carts, setCarts }) => {
    const models = use(modelPromises);

    return (
        <div className='md:w-10/12 lg:w-8/12 mx-auto my-10'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className='text-2xl opacity-70'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {models.map(model =>
                    <ModelCard key={model.id}
                        model={model}
                        carts={carts}
                        setCarts={setCarts}
                    />
                )}
            </div>
        </div>
    );
};

export default Models;