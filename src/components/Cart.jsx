import { XCircle } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../redux/Slices/app";
import CartProduct from "./CartProduct";
import AnimationWrapper from "./AniMationWrapper";

const Cart = () => {
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const cartRef = useRef();


    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target) && !event.target.classList.contains("deleteIcon")) {
            closeCart();
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.body.style.overflowY = 'scroll';
        }
    }, []);


    const closeCart = () => {
        dispatch(toggleShowCart(false))
    }


    const getCartTotal = useMemo(() => {
        let total = 0;
        products.map((item) => total += (item.price * item.count));
        return total;
    }, [products]);


    const renderProducts = useMemo(() => {
        return products.map((item, index) => <CartProduct key={index} product={item} />)
    }, [products])


    return (
        <AnimationWrapper>
            <div ref={cartRef} className="fixed z-20 right-0 top-0 h-screen max-md:w-[90vw] w-[400px] bg-[#181818] flex-col flex border-l border-l-gray-500">
                <div className="p-5 border-b border-b-gray-500 flex items-center justify-between">
                    <p>Shopping cart</p>
                    <button
                        onClick={closeCart}
                        className="text-gray-400">
                        <XCircle size={32} weight="light" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-scroll no-scrollbar">
                    {renderProducts}
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between p-3 py-4 border-y border-y-gray-500">
                        <p>total</p>
                        <p>${getCartTotal}.00</p>
                    </div>
                    <div className="w-full p-4 flex items-center justify-center">
                        <a href={'/checkout'} className="p-2 bg-lightRed  rounded-md w-[80%] text-center">CheckOut</a>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default Cart;