import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WorkCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group z-0 w-full" // no col-span here
    >
      <Link to={`/work/${item.slug}`} aria-label={item.title}>
        <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-white/5 shadow-sm transition-shadow group-hover:shadow-md">
          <motion.img
            src={item.src.sm}
            srcSet={`${item.src.thumb} 600w, ${item.src.sm} 1200w, ${item.src.md} 1920w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            alt={item.title}
            loading="lazy"
            className="block w-full h-auto object-contain"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.01 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          {item.title} · {item.year}
        </div>
      </Link>
    </motion.article>
  );
}
