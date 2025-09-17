import { motion } from "framer-motion";

const motifs = [
  {
    id: "grape",
    svg: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" fill="#A21CAF" opacity="0.7"/>
        <circle cx="28" cy="14" r="8" fill="#A21CAF" opacity="0.5"/>
        <circle cx="12" cy="14" r="8" fill="#A21CAF" opacity="0.5"/>
      </svg>
    ),
    style: "top-8 left-8",
  },
  {
    id: "wineglass",
    svg: (
      <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
        <ellipse cx="16" cy="16" rx="12" ry="16" fill="#A21CAF" opacity="0.5"/>
        <rect x="14" y="32" width="4" height="12" fill="#222" />
        <ellipse cx="16" cy="44" rx="6" ry="2" fill="#fff" opacity="0.3"/>
      </svg>
    ),
    style: "top-24 right-12",
  },
  {
    id: "bottle",
    svg: (
      <svg width="24" height="56" viewBox="0 0 24 56" fill="none">
        <rect x="8" y="8" width="8" height="40" rx="4" fill="#A21CAF" opacity="0.6"/>
        <rect x="10" y="0" width="4" height="12" rx="2" fill="#222"/>
      </svg>
    ),
    style: "bottom-8 left-16",
  },
  {
    id: "pasta",
    svg: (
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <rect x="0" y="8" width="40" height="4" rx="2" fill="#FFD700" opacity="0.7"/>
        <rect x="8" y="0" width="4" height="20" rx="2" fill="#FFD700" opacity="0.5"/>
        <rect x="28" y="0" width="4" height="20" rx="2" fill="#FFD700" opacity="0.5"/>
      </svg>
    ),
    style: "bottom-16 right-8",
  },
  {
    id: "corkscrew",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="14" y="0" width="4" height="20" rx="2" fill="#222"/>
        <path d="M16 20 Q18 24 14 28 Q16 30 18 28" stroke="#A21CAF" strokeWidth="2" fill="none"/>
      </svg>
    ),
    style: "top-1/2 left-1/2",
  },
];

const floatVariants = {
  initial: { y: 0 },
  animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity } },
};

const WineMotifs = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    {motifs.map((motif, i) => (
      <motion.div
        key={motif.id}
        className={`absolute ${motif.style}`}
        variants={floatVariants}
        initial="initial"
        animate="animate"
        style={{ zIndex: 1 + i }}
      >
        {motif.svg}
      </motion.div>
    ))}
  </div>
);

export default WineMotifs;