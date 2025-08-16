import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParallaxHero from "../sections/ParallaxHero";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <ParallaxHero forceMotion>
      <motion.div initial="hidden" animate="show" className="max-w-2xl">
        <motion.h1
          variants={fadeUp}
          custom={0}
          className="text-4xl md:text-6xl font-semibold text-white drop-shadow-md"
        >
          +
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mt-3 text-base md:text-lg text-white/90 drop-shadow"
        >
          Illustration, quiet and bright.
        </motion.p>

        <motion.div variants={fadeUp} custom={2} className="mt-6">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium
                       bg-white/90 text-ink hover:bg-white focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70
                       dark:focus-visible:ring-white/60 transition-colors"
          >
            See all works →
          </Link>
        </motion.div>
      </motion.div>
    </ParallaxHero>
  );
}
