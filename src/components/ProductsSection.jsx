import Divider from "./Divider";
import ProductCard from "./ProductCard";
import products from "../data.json";


const ProductsSection = ({ heading, subHeading, category }) => {
    return (
        <div className="productsSection flex items-center flex-col justify-center gap-5 py-[50px] md:h-[150vh]">
            <Divider subHeading={subHeading} heading={heading} />
            <div className="grid grid-cols-3 gap-[40px] max-md:grid-cols-2 max-sm:grid-cols-1 w-[80%] mx-auto">
                {
                    products.filter(product => product.category == category).map((item, index) => {
                        return <ProductCard key={index} product={item} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductsSection;