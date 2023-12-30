import { useDispatch } from "react-redux";
import { DecreaseCount, IncreaseCount, removeFromCart } from "../redux/Slices/cart";
import { Minus, Plus, XCircle } from "@phosphor-icons/react";

const CartProduct = ({ product }) => {
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className="flex items-center border-b border-b-gray-500 p-3 py-5 justify-between w-full">
            <div className="flex items-center gap-3 flex-1">
                <img className="w-[50px]" src={product.image} alt="" />
                <div>
                    <p>{product.name}</p>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => dispatch(DecreaseCount(product.id))}
                            className="bg-white text-black">
                            <Minus size={20} />
                        </button>
                        <p>{product.count}</p>
                        <button
                            onClick={() => dispatch(IncreaseCount(product.id))}
                            className="bg-white text-black">
                            <Plus size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-y-3 flex-col">
                <button
                    onClick={() => handleRemove(product.id)}
                    className="text-gray-400">
                    <p><XCircle className="deleteIcon" size={20} weight="light" /></p>
                </button>
                <p className="text-darkRed">${product.price * product.count}.00</p>
            </div>
        </div>
    )
}

export default CartProduct;