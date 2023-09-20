/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slice/CartSlice";

const FoodCard = ({ id, img, name, desc, rating, price, handleToast }) => {

    const dispatch = useDispatch();

    return (
        <div className="font-bold w-[280px] h-full md:w-[250px] lg:w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 ">
            <img src={img} alt="food-img"
                className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-sm flex justify-between">
                <h2>
                    {name}
                </h2>
                <span className="text-green-500"> ₹ {price}</span>
            </div>
            <p className="text-sm font-normal">
                {desc.slice(0, 70)}...
            </p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    ⭐<span className="ml-1 ">{rating}</span>
                </span>
                <button className="p-2 text-white bg-green-600 hover:bg-green-500 rounded-xl text-sm"
                    onClick={() =>
                        dispatch(addToCart({
                            id, img, name, rating, price, qty: 1
                        }),
                            handleToast(name)
                        )}
                >
                    Add to Cart
                </button>
            </div>
        </div >
    )
}

export default FoodCard