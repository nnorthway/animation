import { motion } from "framer-motion"

export default function Badge({ caption }) {
  return <motion.span 
    animate={{scale: [1, 1.5, 1], opacity: [1, .5, 1]}}
    transition={{duration: .75}}
    className="badge">
      {caption}
    </motion.span>;
}
