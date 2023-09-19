import FoodCard from "./FoodCard"
import FoodData from "../data/FoodData"


const FoodItems = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 ">

            {
                FoodData && FoodData.map((food) => {

                    return <div key={food.id}>
                        <FoodCard
                            id={food.id}
                            img={food.img}
                            name={food.name}
                            price={food.price}
                            desc={food.desc}
                            rating={food.rating}
                        />
                    </div>
                })
            }

        </div>
    )
}

export default FoodItems