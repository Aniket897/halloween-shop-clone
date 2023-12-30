import AnimationWrapper from "../components/AniMationWrapper"
import Divider from "../components/Divider"

const About = () => {
    return (
        <AnimationWrapper>
            <div className="w-[80vw] mx-auto text-center">
                <Divider subHeading="A few words" heading="about us" />
                <div className="w-full">
                    <p className="heading md:text-4xl">
                        Our journey began with a shared passion for all things Halloween, from the thrill of dressing up in spooky costumes to the joy of decorating our homes with enchanting decorations and indulging in sweet treats that make the season truly special.
                    </p>
                    <p className="mt-[50px]">
                        bewitching season
                        Our journey began with a shared passion for all things Halloween, from the thrill of dressing up in spooky costumes to the joy of decorating our homes with enchanting decorations and indulging in sweet treats that make the season truly special.
                        Our team of Halloween enthusiasts and connoisseurs has scoured the realms of costumes, decorations, and confections to bring you a handpicked selection of the finest and most bewitching items. Each costume we offer has been chosen to ignite your imagination and make your Halloween dreams a reality. Our decorations are designed to transform your space into a haunted wonderland, and our delectable sweets are chosen to tantalize your taste buds and add a sweet touch to your celebrations. Our shop is your trusted partner in embracing the spirit of Halloween, and we're here to make sure your Halloween is filled with thrills, chills, and unforgettable moments. Join us as we celebrate the magic, creativity, and enchantment that Halloween has to offer.
                    </p>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default About