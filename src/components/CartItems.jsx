/* eslint-disable react/prop-types */
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/CartSlice";
import { incrementItem, decrementItem } from "../redux/slice/CartSlice"


const CartItems = ({ id, img, name, price, qty }) => {

    const dispatch = useDispatch();

    return (
        <div className="flex gap-2 shadow-md p-3  border border-dotted border-gray-600 rounded-xl mt-3">
            <AiOutlineDelete
                onClick={() => {
                    dispatch(removeFromCart({ id, img, name, price, qty }));
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
            </div>
        </div>
    )
}

export default CartItems