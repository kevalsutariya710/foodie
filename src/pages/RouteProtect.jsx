/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

const RouteProtect = ({ element }) => {
    const cartItems = useSelector((state) => state.cart.cart);
    return cartItems.length > 0 ? element : <Navigate to="/" />;
}

export default RouteProtect