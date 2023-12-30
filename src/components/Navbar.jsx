import { List, ShoppingCart } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleShowCart } from "../redux/Slices/app";
import { useState } from "react";

const navlinks = [
    { name: "home", href: "/" },
    { name: "shop", href: "/shop" },
    { name: "about", href: "/about" },
]



const Navbar = () => {
    const { pathname } = useLocation();
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showMobilNav, setShowMobileNav] = useState(false)


    const openCart = (event) => {
        event.stopPropagation();

        dispatch(toggleShowCart(true))
    }



    const toggleMobileNav = () => {
        setShowMobileNav(!showMobilNav);
    }



    const MobileNav = () => {
        return <div className=" md:hidden absolute top-[100px] z-[20] w-full left-0 text-center flex flex-col ">
            {
                navlinks.map((item, index) => {
                    return <a href={item.href}
                        className={`uppercase bg-darkRed hover:bg-lightRed p-4 cursor-pointer font-extrabold   duration-500`}
                        key={index}>{item.name}</a>
                })
            }
        </div>
    }


    return (
        <div className="md:w-[80vw] mx-auto px-8 flex items-center justify-between py-5">
            <Link to={'/'} className="flex items-center gap-2">
                <img
                    className="w-[30px]"
                    src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/10/logo-icon.svg"
                    alt=""
                />
                <p className="heading text-xl ">
                    Halloween Shop
                </p>
            </Link>
            <div className="flex items-center gap-9">
                <div className="flex items-center gap-9 max-md:hidden">
                    {
                        navlinks.map((item, index) => {
                            return (
                                <Link to={item.href}
                                    className={`uppercase cursor-pointer font-extrabold 
                                    ${pathname == item.href ? 'text-darkRed' : 'hover:text-darkRed'}  duration-500`}
                                    key={index}>{item.name}</Link>
                            )
                        })
                    }
                </div>
                {showMobilNav && MobileNav()}
                <div
                    onClick={openCart}
                    className="uppercase relative cursor-pointer font-extrabold">
                    <ShoppingCart
                        size={20}
                    />
                    <p className="absolute flex items-center justify-center top-[-15px] bg-lightRed rounded-full p-1 w-[20px] h-[20px] right-[-15px] text-xs">
                        {products.length}
                    </p>
                </div>
                <List
                    onClick={toggleMobileNav}
                    className="md:hidden"
                    size={20}
                    weight="light"
                />
            </div>
        </div>
    )
}

export default Navbar;