import { useParams, Link } from "react-router-dom";
import { works } from "../data/works.js";
import { motion } from "framer-motion";

export default function WorkDetail() {
  const { slug } = useParams();
  const item = works.find(w => w.slug === slug);
  if (!item) return <p>Not found.</p>;
  return (
    <article className="max-w-4xl mx-auto">
      <motion.img
        src={item.src.md}
        alt={item.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.24 }}
        className="w-full rounded-2xl mb-6"
      />
      <h1 className="text-xl">{item.title}</h1>
      <p className="text-sm text-neutral-500">{item.year} · {item.tags.join(" · ")}</p>
      {item.caption && <p className="mt-4 leading-7">{item.caption}</p>}
      <div className="mt-8">
        <Link to="/works" className="underline">Back to works</Link>
      </div>
    </article>
  );
}
