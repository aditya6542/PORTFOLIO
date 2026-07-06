import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillsList } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-col gap-16'>
      {/* 3D Balls Container */}
      <div>
        <motion.div variants={textVariant()} className="mb-10 text-center">
          <p className={`${styles.sectionSubText}`}>Interactive Core Stack</p>
          <h2 className={`${styles.sectionHeadText}`}>3D Canvas.</h2>
        </motion.div>
        
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* 2D Skills Grid */}
      <div className='mt-10'>
        <motion.div variants={textVariant()} className="mb-10 text-center">
          <p className={`${styles.sectionSubText}`}>Full technical expertise</p>
          <h2 className={`${styles.sectionHeadText}`}>Skills & Tools.</h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillsList.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              className='bg-black-100 p-6 rounded-2xl border border-secondary/10 hover:border-[#915EFF]/30 transition-colors shadow-lg'
            >
              <h3 className='text-[#915EFF] text-[18px] font-bold mb-5 tracking-wide'>
                {category.title}
              </h3>
              
              <div className='flex flex-wrap gap-2.5'>
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className='flex items-center gap-2 bg-tertiary hover:bg-[#915EFF]/10 py-1.5 px-3.5 rounded-lg border border-secondary/5 hover:border-[#915EFF]/40 transition-all duration-300 cursor-default'
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className='w-5 h-5 object-contain'
                      />
                    )}
                    <span className='text-white-100 text-[13px] font-medium'>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
