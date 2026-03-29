import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = (item) => {
        const filterArray = carts.filter(c => c.id !== item.id);
        setCarts(filterArray);
    }

    return (
        <div className='w-10/12 mx-auto my-5'>
            <h2 className='max-w-[800px] mx-auto text-4xl font-bold mb-5'>Your Cart</h2>
            {carts.length === 0
                ? <p className='text-center font-semibold text-2xl opacity-70 py-20'>Your cart is empty</p> :
                <>
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
                                    <button
                                        onClick={() => handleDelete(item)}
                                    className='text-2xl opacity-70 hover:text-red-400 cursor-pointer'><MdOutlineCancel /></button>
                            </div>
                        </div>
                        </div>
                    )}

            <div className='max-w-[800px] mx-auto border py-5 px-6 rounded-2xl bg-black mb-5'>
                <div className='flex justify-between text-white'>
                    <h2 className='text-3xl font-bold'>Total</h2>
                    <p className='text-3xl font-bold'>${totalPrice}</p>
                </div>
            </div>
            <div className='bg-red-500 rounded-2xl max-w-[800px] mx-auto'>
                <button
                    onClick={() => setCarts([])}
                    className='w-full text-white font-semibold text-3xl py-5 cursor-pointer'>Proceed to Checkout</button>
            </div>
        </>
            }
        </div >
    );
};

export default Cart;