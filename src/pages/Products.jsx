import { useParams } from "react-router-dom"
import PRODUCTS from '../data.json';
import { useEffect, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import RelatedProducts from "../components/RelatedProducts";
import ReviewCard from "../components/ReviewCard";
import Images from "../components/product/Images";
import Info from "../components/product/Info";
import AnimationWrapper from "../components/AniMationWrapper";





const Products = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const [showDescription, setShowDescription] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    useEffect(() => {
        setLoading(true)
        handlesetProduct()
    }, [productId])

    const handlesetProduct = () => {
        const product = PRODUCTS.filter((item) => item.id == productId)
        setProduct(product[0])
        setLoading(false)
    }


    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }

    const toggleReviews = () => {
        setShowReviews(!showReviews)
    }


    if (loading) {
        return <p>Loading.....</p>
    }

    return (
        <AnimationWrapper>
            <div className="w-[80vw] mx-auto pt-[50px]">
                <div className="w-full flex max-lg:flex-col max-lg:gap-y-5">
                    <Images product={product} />
                    <Info product={product} />
                </div>
                <div className="w-full mt-[50px]">
                    <div className="border p-6 border-gray-700 duration-1000">
                        <div onClick={toggleDescription} className="flex items-center text-darkRed justify-between cursor-pointer">
                            <p className="heading font-2xl">Description </p>
                            <Plus size={20} weight="bold" />
                        </div>
                        {showDescription && (
                            <p className="mt-[50px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, sint velit unde at doloribus facilis vel cumque corporis commodi, suscipit, voluptate quas fugit ex repellendus neque quisquam est delectus repudiandae. Sapiente inventore nobis atque praesentium tenetur sed molestiae commodi aliquid, harum explicabo odio quos ipsa enim? Perspiciatis ratione temporibus optio voluptas voluptatem iusto incidunt, quia, quos ex repellat rerum inventore consectetur eveniet labore alias porro eaque odit. Reiciendis illum blanditiis incidunt soluta veniam quia repudiandae minus tempore hic quam dolores, non possimus sit, mollitia ad ducimus. Ea esse id possimus sit, ducimus voluptas eligendi eaque obcaecati, aliquam fugiat optio. Enim!</p>
                        )}
                    </div>
                    <div className="border p-6 border-gray-700">
                        <div onClick={toggleReviews} className="flex items-center text-darkRed justify-between cursor-pointer">
                            <p className="heading font-2xl">Reviews (1)</p>
                            <Plus size={20} weight="bold" />
                        </div>
                        {showReviews && (
                            <div className="mt-[50px]">
                                <ReviewCard />
                            </div>
                        )}
                    </div>
                </div>
                <RelatedProducts product={product} />
            </div>
        </AnimationWrapper>
    )
}

export default Products;