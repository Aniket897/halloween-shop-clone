import { LockSimple, MapPinLine, Truck } from "@phosphor-icons/react";

const Features = () => {
    return (
        <div className="flex items-center max-md:flex-col gap-[50px] w-[80vw] mx-auto py-[50px] justify-evenly">
            <div className="max-md:w-full">
                <Truck size={32} weight="fill" />
                <p className="text-2xl heading mt-4">Free Shipping</p>
                <p>Enjoy the treat of free shipping on all your Halloween must-haves</p>
            </div>
            <div>
                <LockSimple size={32} weight="fill" />
                <p className="text-2xl heading mt-4">Secure Payments</p>
                <p>Shop with confidence knowing that your payments are securely processed for a worry-free Halloween experience</p>
            </div>
            <div>
                <MapPinLine size={32} weight="fill" />
                <p className="text-2xl heading mt-4">Order Tracking</p>
                <p>Stay in the know with real-time order tracking to ensure your Halloween treasures arrive right on time</p>
            </div>
        </div>
    )
}

export default Features;