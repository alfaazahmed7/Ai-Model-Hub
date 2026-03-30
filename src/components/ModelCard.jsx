import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        setIsSubscribed(true);

        const isFound = carts.find((item) => item.id === model.id);
        if (isFound) {
            toast.error("Item already in the cart!");
            return;
        }

        setCarts([...carts, model]);
        toast("Item added to cart!");
    }

    return (
        <div className='shadow-xl rounded-2xl border border-[#e5e5e5]'>
            <div className='bg-gray-300 p-5 rounded-xl rounded-b-none'>
                <img className='h-28 w-28 mx-auto rounded-4xl transition-transform duration-300 hover:scale-110' src={model.image} alt={model.title} />
            </div>
            <div className='p-5'>
                <h2 className='text-3xl font-semibold mb-3'>{model.title}</h2>
                <p className='text-gray-400 mb-3 line-clamp-2'>{model.description}</p>
                <div className='flex items-end gap-2 mb-3'>
                    <p className='text-2xl font-semibold'>${model.price}</p>
                    <p className='text-gray-400 font-medium'>/month</p>
                </div>
                <div>
                    <button
                        onClick={handleSubscription}
                        className='bg-[#ef233c] w-full py-3 rounded-xl text-white font-semibold cursor-pointer'>
                        {isSubscribed ? "Subscribed" : "Subscribe Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;