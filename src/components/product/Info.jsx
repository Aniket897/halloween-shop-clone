import { Check, CheckCircle } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCard, removeFromCart } from "../../redux/Slices/cart";

const Info = ({ product }) => {

    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (!products.includes(product)) {
            dispatch(addtoCard(product))
        }
    }




    const RenderButton = () => {
        return <button onClick={handleAddToCart} className="bg-darkRed uppercase font-bold w-[150px] flex items-center justify-center gap-1 flex-nowrap p-3 rounded-md">
            {products.includes(product) ? <>
                add to cart
                <Check size={15} />
            </> : "add to cart"}
        </button>
    };
    return (
        <div className="lg:w-[40%] lg:ml-[50px] flex flex-col gap-4">
            <div className="w-full border-b border-b-gray-500 flex flex-col gap-y-8 pb-5">
                <p className="text-darkRed uppercase">{product.category}</p>
                <p className="heading text-4xl">{product.name}</p>
                <div>
                    <p className="font-bold text-xl">${product.price}.00 & free shipping</p>
                    <p>Indulge in the irresistible enchantment of our Halloween cookies. Each bite is a taste of spooky delight, meticulously crafted to capture the essence of the season. Whether it’s the whimsical charm of our pumpkin-shaped cookies, the haunting allure of our ghostly sugar cookies, or the playful design of our witch’s hat treats, our cookies are a delicious addition to any Halloween celebration.</p>
                </div>
                {RenderButton()}
            </div>
            <div className="flex flex-col gap-y-4">
                <p>category : <span className="text-darkRed">{product.category}</span></p>
                <p className="font-bold text-xl">Free shipping on orders over $50!</p>
                <div>
                    <p className="flex items-center gap-2">
                        <CheckCircle size={20} weight="fill" />
                        No-Risk Money Back Guarantee!
                    </p>
                    <p className="flex items-center gap-2">
                        <CheckCircle size={20} weight="fill" />
                        No Hassle Refunds
                    </p>
                    <p className="flex items-center gap-2">
                        <CheckCircle size={20} weight="fill" />
                        Secure Payments
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info;