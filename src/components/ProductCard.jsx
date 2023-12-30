import { useDispatch, useSelector } from "react-redux";
import { addtoCard } from "../redux/Slices/cart";
import { Check, Star } from "@phosphor-icons/react";

const ProductCard = ({ product }) => {
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (!products.includes(product)) {
            dispatch(addtoCard(product))
        }
    }


    return (
        <div className="w-full flex flex-col gap-y-2">
            <a href={`/product/${product.id}`}>
                <div className="w-full aspect-square">
                    <img className="w-full h-full rounded-md" src={product.image} alt="" />
                </div>
            </a>
            <p className="flex">
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
            </p>
            <p className="heading text-xl">{product.name}</p>
            <p className="text-lightRed text-xl font-bold">$ {product.price}.00</p>
            <button onClick={handleAddToCart} className="bg-darkRed uppercase font-bold w-[150px] flex items-center justify-center gap-1 flex-nowrap p-3 rounded-md">
                {products.includes(product) ? <>
                    add to cart
                    <Check size={15} />
                </> : "add to cart"}
            </button>
        </div>
    )
}

export default ProductCard;


