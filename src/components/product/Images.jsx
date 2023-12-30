
const Images = ({product})=> {
    return (
        <div className="lg:w-[50%]">
            <div className="w-full aspect-video">
                <img className="w-full h-full object-cover" src={product.image} alt="" />
            </div>
            <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 aspect-video">
                    <img className="w-full h-full object-cover" src={product.image} alt="" />
                </div>
                <div className="flex-1 aspect-video">
                    <img className="w-full h-full object-left" src={product.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Images;