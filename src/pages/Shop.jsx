import AnimationWrapper from "../components/AniMationWrapper";
import ProductCard from "../components/ProductCard";
import products from '../data.json';



const Shop = () => {
    return (
        <AnimationWrapper>
            <div className="md:w-[80vw] mx-auto pt-[50px] max-md:px-9">
                <p className="heading md:text-4xl border-b border-b-gray-400 pb-4">Shop</p>
                <div className="grid grid-cols-3 gap-[40px] gap-y-[60px] max-md:grid-cols-2 max-md:grid-cols-1 w-full mt-[100px] mx-auto">
                    {
                        products.map((item, index) => <ProductCard product={item} key={index} />)
                    }
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default Shop;