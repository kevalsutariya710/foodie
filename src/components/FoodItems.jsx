import FoodCard from "./FoodCard"
import FoodData from "../data/FoodData"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";


const FoodItems = () => {

    const handleToast = (name) => { toast.success(`${name} added to cart`) }
    const category = useSelector(state => state.category.category)
    const search = useSelector(state => state.search.search);

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-wrap justify-center gap-4 p-1 mt-8 ">

                {
                    FoodData && FoodData.filter((food) => {
                        if (category === "All") {
                            return food.name.toLowerCase().includes(search.toLowerCase());
                        }
                        else {
                            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
                        }

                    }).map((food) => {

                        return <div key={food.id}>
                            <FoodCard
                                id={food.id}
                                img={food.img}
                                name={food.name}
                                price={food.price}
                                desc={food.desc}
                                rating={food.rating}
                                handleToast={handleToast}
                            />
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default FoodItems