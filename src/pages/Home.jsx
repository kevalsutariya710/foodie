import Filter from "../components/Filter"
import FoodItems from "../components/FoodItems"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Cart from "../components/Cart"

const Home = () => {
    return (
        <>
            <NavBar />
            <Filter />
            <FoodItems />
            <Cart />
            <Footer />
        </>
    )
}

export default Home