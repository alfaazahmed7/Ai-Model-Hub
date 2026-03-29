import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Cart = ({ carts }) => {
    return (
        <div className='w-10/12 mx-auto my-5'>
            <h2 className='max-w-[800px] mx-auto text-4xl font-bold mb-5'>Your Cart</h2>
            {carts.map(item =>
                <div className='max-w-[800px] mx-auto border border-gray-200 p-2 flex gap-5 rounded-2xl mb-5 bg-gray-300'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[80px] h-[80px] rounded-xl ' src={item.image} alt="" />
                        <div>
                            <h2 className='text-3xl font-semibold '>{item.title}</h2>
                            <p className='opacity-70 font-medium max-w-[620px]'>{item.description}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-36'>
                        <div>
                            <h2 className='text-2xl font-bold text-center'>${item.price}</h2>
                            <p className='font-medium opacity-70'>Per Month</p>
                        </div>
                        <div>
                            <span className='text-2xl opacity-70'><MdOutlineCancel /></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;