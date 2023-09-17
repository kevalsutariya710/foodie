import Filter from "../components/Filter"
import FoodItems from "../components/FoodItems"
import Footer from "../components/Footer"
import MainCon from "../components/MainCon"
import NavBar from "../components/NavBar"

const Home = () => {
    return (
        <>
            <NavBar />
            <Filter />
            <FoodItems />
            {/* <MainCon /> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home