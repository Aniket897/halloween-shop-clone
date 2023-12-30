import Products from '../data.json';
import ProductCard from './ProductCard';


const RelatedProducts = ({ product }) => {
    return (
        <div className='w-full pt-[100px]'>
            <p className='heading text-5xl'>Related Products</p>
            <div className="grid grid-cols-3 gap-[40px] gap-y-[60px] max-md:grid-cols-2 w-full mt-[100px] mx-auto">
                {
                    Products.map((Product, index) => {
                        if (Product.category == product.category && Product != product) {
                            return <ProductCard key={index} product={Product} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts;