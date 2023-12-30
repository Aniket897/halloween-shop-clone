import Divider from "./Divider";

const CandyPicks = () => {
    return (
        <div className="productsSection flex flex-col gap-y-6 items-center">
            <Divider subHeading="sweets" heading="Halloween Candy Packs" />
            <div className="flex items-center gap-5 justify-between w-[80vw] mx-auto max-md:flex-col-reverse">
                <div className="md:w-[50%] flex flex-col gap-y-8">
                    <p className="text-4xl heading">
                        a sprinkle of magic to every trick-or-treat adventure
                    </p>
                    <p className="font-bold">
                        From the classic to the creatively creepy, Halloween candies remind us that the true essence of this holiday lies in the delightful experience of indulging in sweet surprises with friends and family.
                    </p>
                    <button className="bg-darkRed uppercase font-bold w-[150px] p-3 rounded-md">shop now</button>
                </div>
                <img className="w-[500px] rounded-2xl" src="https://websitedemos.net/halloween-shop-04/wp-content/uploads/sites/1398/2023/09/product-0010.jpg" alt="" />
            </div>
        </div>
    )
}

export default CandyPicks;