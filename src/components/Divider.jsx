
const Divider = ({ heading, subHeading }) => {
    return (
        <div className="text-center pb-[100px] pt-[50px]">
            <p className="uppercase text-lightRed pb-4 font-bold">{subHeading}</p>
            <p className="uppercase text-5xl heading">{heading}</p>
        </div>
    )
}

export default Divider;