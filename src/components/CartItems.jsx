/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/CartSlice";
import { incrementItem, decrementItem } from "../redux/slice/CartSlice"
import toast from 'react-hot-toast';

const CartItems = ({ id, img, name, price, qty }) => {

    const dispatch = useDispatch();

    return (
        <div className="flex gap-2 shadow-md p-1  border border-dotted border-gray-600 rounded-xl mt-3">

            <div className='w-full min-h-[80px] flex items-center gap-x-2'>
                <img className='max-w-[60px] hover:scale-105 transition duration-500' src={img} alt="" />

                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <span className="ext-sm font-medium max-w-[240px] text-primary hover:text-green-700 transition duration-300  mb-1">
                            {name}
                        </span>
                        <div className="text-lg cursor-pointer">
                            <AiOutlineDelete
                                onClick={() => {
                                    dispatch(removeFromCart({ id, img, name, price, qty })),
                                        toast.success(` ${name} Deleted from Cart`)
                                }}
                                className=" cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className='flex gap-x-2 h-[36px] text-sm'>
                        <div className='flex flex-auto max-w-[90px] items-center h-full border text-primary font-medium border-dotted'>
                            <div className="flex-1 flex justify-center text-lg items-center cursor-pointer hover:text-green-600 transition duration-500">
                                <AiOutlineMinusCircle
                                    onClick={() => qty > 1 ? dispatch(decrementItem({ id })) : dispatch(removeFromCart({ id }))}
                                />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                                {qty}
                            </div>
                            <div className="flex-1 h-full flex justify-center text-lg items-center cursor-pointer hover:text-green-600 transition duration-500">
                                <AiOutlinePlusCircle
                                    onClick={() => dispatch(incrementItem({ id }))}
                                />
                            </div>
                        </div>
                        <div className='flex-1 flex items-center justify-around'>₹ {price}</div>
                    </div>
                </div>
            </div>
            {/* <AiOutlineDelete
                onClick={() => {
                    dispatch(removeFromCart({ id, img, name, price, qty })),
                        toast.success(` ${name} Deleted from Cart`)
                }}
                className="absolute right-7 cursor-pointer"
            />

            <img src={img}
                alt=""
                className=" w-[50px] h-[50px]"
            />
            <div className="leading-5">
                <span className=" text-gray-800">{name}</span>
                <div className="flex justify-between ">
                    <span className="text-green-600">₹ {price}</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7 m-1">
                        <AiOutlinePlusCircle
                            onClick={() => dispatch(incrementItem({ id }))}
                            className="text-xl hover:text-green-800 transition-all cursor-pointer" />
                        {qty}
                        <AiOutlineMinusCircle
                            onClick={() => qty > 1 ? dispatch(decrementItem({ id })) : dispatch(removeFromCart({ id }))}
                            className="text-xl hover:text-green-800 transition-all cursor-pointer" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CartItems