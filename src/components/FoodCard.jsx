

const FoodCard = (Props) => {
    return (
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
            <img src={Props.img} alt="food-img"
                className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-sm flex justify-between">
                <h2>
                    {Props.name}
                </h2>
                <span className="text-green-500">{Props.price}</span>
            </div>
            <p className="text-sm font-normal">
                {Props.desc.slice(0, 70)}...
            </p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    ⭐<span className="ml-1 ">{Props.rating}</span>
                </span>
                <button className="p-2 text-white bg-green-600 hover:bg-green-500 rounded-xl text-sm" >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default FoodCard