import { FiArrowRightCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import CartItems from "./CartItems";
import { useState } from "react";

const Cart = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {
                (isOpen) ?
                    (<div className="fixed right-0 top-0 w-full md:w-[25vw] lg:w-[20vw] h-full bg-white p-3">
                        <div className="flex justify-between">
                            <span className="text-lg ">
                                My Order
                            </span>
                            <button onClick={()=> setIsOpen(false)}>
                                <FiArrowRightCircle className="text-2xl cursor-pointer hover:text-green-700 transition-all" />
                            </button>
                        </div>
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <CartItems />
                        <div className="absolute bottom-0">
                            <span className="text-lg" >Total Items:</span>
                            <h1 className="text-lg">Total Price:</h1>
                            <hr className="w-[90vw] lg:w-[18vw] m-3" />
                            <button className="border rounded-2xl bg-green-600 p-1 w-[90vw] md:w-[19vw] lg:w-[19vw] mb-4">CheckOut</button>
                        </div>
                    </div>)
                    :
                    <button onClick={() => setIsOpen(true)} className="!fixed bottom-24 right-10 leading-tight">
                        <div className="border rounded-full p-3 border-black cursor-pointer bg-green-200">
                            <BsCart3 />
                        </div>
                    </button>
            }
        </>
    )
}

export default Cart