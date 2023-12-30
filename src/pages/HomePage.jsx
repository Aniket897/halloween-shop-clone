import CandyPicks from "../components/CandyPicks";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import ProductsSection from "../components/ProductsSection";
import Testimonials from "../components/Testimonials";
import products from '../data.json';
const HomePage = () => {
    console.log(products)
    return (
        <>
            <Hero />
            <ProductsSection
                subHeading='most delicious'
                heading='candies & cookies'
                category="candies & cookies"
            />
            <CandyPicks />
            <ProductsSection
                subHeading='scarry'
                heading='Decorations'
                category="decorations"
            />
            <Hero2 />
            <ProductsSection
                subHeading='UNFORGETTABLE'
                heading='Costumes'
                category="costumes"
            />
            <Testimonials/>
            <Features/>
        </>
    )
}

export default HomePage;