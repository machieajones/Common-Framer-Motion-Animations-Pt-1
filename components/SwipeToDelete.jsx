"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SwipeToDelete = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Shopping List Item 1" },
    { id: 2, text: "Shopping List Item 2" },
    { id: 3, text: "Shopping List Item 3" },
    { id: 4, text: "Shopping List Item 4" },
    { id: 5, text: "Shopping List Item 5" },
    { id: 6, text: "Shopping List Item 6" },
    { id: 7, text: "Shopping List Item 7" },
    { id: 8, text: "Shopping List Item 8" },
    { id: 9, text: "Shopping List Item 9" },
    { id: 10, text: "Shopping List Item 10" },
  ]);

  // Function to remove item from state
  const handleRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-3 p-5 max-w-full w-xl mx-auto font-bold">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="relative w-full "
          >
            {/* Background (Red Delete Area) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 flex items-center justify-end pr-5 bg-red-600 rounded-lg"
            >
              <span className="text-white font-bold">Delete</span>
            </motion.div>

            {/* Swipeable Card */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                const cardWidth = event.target.offsetWidth;
                const deleteThreshold = -cardWidth * 0.75;

                if (info.offset.x < deleteThreshold) {
                  handleRemove(item.id);
                }
              }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: -150, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileDrag={{ scale: 1.05 }}
              className="relative z-10 bg-gray-300 text-black p-4 rounded-lg cursor-grab"
            >
              {item.text}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SwipeToDelete;
