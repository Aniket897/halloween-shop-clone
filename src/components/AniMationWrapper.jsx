import { motion } from "framer-motion";


const AnimationWrapper = ({ children, initial = { opacity: 0 }, animate = { opacity: 1 } }) => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{duration : .5}}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;