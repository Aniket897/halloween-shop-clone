import { Star } from "@phosphor-icons/react"

const Testimonials = () => {
    return (
        <div className="productsSection text-center py-[100px] flex flex-col items-center gap-y-6">
            <p className="uppercase text-darkRed">Testimonials</p>
            <p className="flex">
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
            </p>
            <p className="heading sm:w-[50%] text-4xl">{`"Every item I purchased, from a wickedly realistic witch's hat to eerie decorations, exceeded my expectations. My Halloween celebrations have reached a whole new level of spooky fun. I'm already looking forward to next year's shopping spree!"`}</p>
        </div>
    )
}

export default Testimonials