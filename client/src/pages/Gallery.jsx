import { motion } from "motion/react";

const Gallery = () => {
  return (
    <motion.div
      className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Gallery
      </h1>

      <p className="text-2xl font-semibold text-blue-600 mb-4">
        🚀 Coming Soon
      </p>

      <p className="max-w-xl text-gray-500 leading-7">
        We're building a beautiful gallery where you'll be able to explore,
        revisit, and download all your AI-generated images in one place.
        Stay tuned for exciting updates!
      </p>

      <div className="mt-10">
        <button
          disabled
          className="px-8 py-3 rounded-full bg-gray-200 text-gray-500 cursor-not-allowed"
        >
          Feature Under Development
        </button>
      </div>
    </motion.div>
  );
};

export default Gallery;