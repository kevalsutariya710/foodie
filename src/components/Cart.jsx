import { FiArrowRightCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import CartItems from "./CartItems";
import { useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const cartItem = useSelector((state) => state.cart.cart)
    const TotalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0)
    const TotalPrice = cartItem.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)


    return (
        <>
            <div className={`fixed right-0 top-0 w-full md:w-[40vw] lg:w-[23vw] h-full border rounded-2xl bg-white p-3
            ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-linear z-50`}>
                <div className="flex justify-between">
                    <span className="text-lg ">
                        My Order
                    </span>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FiArrowRightCircle className="text-2xl cursor-pointer hover:text-green-700 transition-all" />
                    </button>
                </div>
                {
                    cartItem.length > 0 ? (
                        cartItem.map((food) => {
                            return (
                                <CartItems
                                    key={food.id}
                                    id={food.id}
                                    name={food.name}
                                    price={food.price}
                                    img={food.img}
                                    qty={food.qty}
                                />
                            );
                        })
                    ) : (
                        <h2 className="text-center text-xl mt-10 text-gray-800">
                            Your cart is empty
                        </h2>
                    )
                }
                <div className="absolute bottom-0">
                    <span className="text-lg" >Total Items: {TotalQty}</span>
                    <h1 className="text-lg">Total Price: ₹ {TotalPrice}</h1>
                    <hr className="w-[90vw] lg:w-[20vw] m-3" />
                    <div className="lg:flex lg:justify-center">
                        <button
                            onClick={() => {
                                navigate("/success")
                            }}
                            className="bg-green-600 font-bold px-3 text-white py-2 rounded-full w-[90vw] md:w-[20vw] lg:w-[18vw] mb-5">
                            CheckOut
                        </button>
                    </div>
                </div>
            </div >
            <BsCart3
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full bg-green-100 shadow-md text-5xl p-3 fixed bottom-14 right-5"
            />
        </>
    )
}

export default Cart