
const Hero2 = () => {
    return (
        <div className="hero2 w-[95vw] flex items-center  rounded-2xl relative  h-fit py-[90px] mt-4 mx-auto">
            <div className="absolute w-full h-full top-0 left-0 bg-[#101217aa]"></div>
            <div className="z-10 w-[90%] md:w-[80%] mx-auto">
                <div className="md:w-[70%] flex flex-col gap-y-6">
                    <p className="font-bold">NEW COLLECTION</p>
                    <p className="heading text-4xl md:text-8xl">Ceramic Halloween Decorations</p>
                    <p>From intricately designed ceramic pumpkins with whimsical smiles to hauntingly beautiful ceramic witch figurines, these decorations serve as captivating focal points in any Halloween display.</p>
                    <button className="bg-darkRed w-[150px] p-3 rounded-md">shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero2