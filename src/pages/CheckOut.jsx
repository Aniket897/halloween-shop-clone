import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";

const CheckOut = () => {
    const { products } = useSelector(state => state.cart);



    const getCartTotal = useMemo(() => {
        let total = 0;
        products.map((item) => total += (item.price * item.count));
        return total;
    }, [products]);


    if(products.length == 0){
        return <Navigate to={'/'} />
    }


    return (
        <div className="w-[80vw] mx-auto pt-[60px] min-h-screen">
            <p className="text-3xl heading">checkout</p>
            <div className="md:w-[50%] mt-[50px] mx-auto flex flex-col items-center">
                {
                    products.map((item, index) => <CartProduct key={index} product={item} />)
                }
                <button className="bg-darkRed w-full p-3 rounded-md mt-9 font-extrabold">Place Order ${getCartTotal}.00</button>
            </div>
        </div>
    )
}

export default CheckOut;