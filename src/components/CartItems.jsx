import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";


const CartItems = () => {
    return (
        <div className="flex gap-2 shadow-md p-3  border border-dotted border-gray-600 rounded-xl mt-3">
            <div className="flex ">
                <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
                    alt=""
                    className=" w-[25vw] md:w-[10vw] lg:w-[6vw]"
                />
                <div className="">
                    <span className="text-lg ">Title</span>
                    <div className="flex justify-between">
                        <span className="text-green-600">₹ 120</span>
                        <div className="flex justify-center items-center gap-2 absolute right-7">
                            <AiOutlineMinusCircle className="text-lg hover:text-green-800 transition-all cursor-pointer" />
                            1
                            <AiOutlinePlusCircle className="text-lg hover:text-green-800 transition-all cursor-pointer" />
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default CartItems