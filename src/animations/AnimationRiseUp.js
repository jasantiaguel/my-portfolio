import { motion } from "framer-motion";
import classNames from "classnames";

const textRiseVariants = {
  hidden: { y: "160%", opacity: 1 },
  visible: { y: 0, opacity: 1 },
};

export default function AnimationRiseUp({ uniqueKey, className, delay = 0, onClick, children }) {
  return (
    <div className="masking-container">
      <motion.div
        key={uniqueKey}
        className={classNames(className)}
        initial="hidden"
        animate="visible"
        variants={textRiseVariants}
        transition={{
          duration: 1.6,
          ease: [0.1, 0.8, 0.2, 1],
          delay: delay,
        }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </div>
  );
}
