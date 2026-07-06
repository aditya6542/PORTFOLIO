import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo } from "../constants";

const HighlightCard = ({ index, title, children }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between border border-secondary/5 hover:border-[#915EFF]/30 transition-colors'
  >
    <div>
      <h3 className='text-white font-bold text-[20px] mb-4 text-[#915EFF]'>{title}</h3>
      {children}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Profile details</p>
          <h2 className={styles.sectionHeadText}>Highlights.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {/* Career Objective Card */}
        <motion.div
          variants={fadeIn("", "spring", 0, 0.75)}
          className='bg-black-200 p-8 rounded-3xl w-full max-w-4xl border border-secondary/5 hover:border-[#915EFF]/30 transition-colors'
        >
          <h3 className='text-[#915EFF] font-bold text-[22px] mb-3'>Career Objective</h3>
          <p className='text-white-100 text-[18px] leading-[30px] italic font-medium'>
            "{personalInfo.careerObjective}"
          </p>
        </motion.div>

        {/* Soft Skills Card */}
        <HighlightCard index={1} title='Soft Skills'>
          <div className='flex flex-wrap gap-2 mt-2'>
            {personalInfo.softSkills.map((skill, i) => (
              <span key={i} className='bg-tertiary py-1.5 px-3 rounded-lg text-white-100 text-[13px] border border-secondary/15'>
                ⚡ {skill}
              </span>
            ))}
          </div>
        </HighlightCard>

        {/* Achievements Card */}
        <HighlightCard index={2} title='Achievements'>
          <ul className='list-disc pl-5 text-white-100 text-[14px] space-y-2.5'>
            {personalInfo.achievements.map((achievement, i) => (
              <li key={i} className='leading-[20px]'>{achievement}</li>
            ))}
          </ul>
        </HighlightCard>

        {/* Hobbies Card */}
        <HighlightCard index={3} title='Hobbies & Interests'>
          <div className='flex flex-wrap gap-2 mt-2'>
            {personalInfo.hobbies.map((hobby, i) => (
              <span key={i} className='bg-tertiary py-1.5 px-3 rounded-lg text-white-100 text-[13px] border border-secondary/15'>
                ⭐ {hobby}
              </span>
            ))}
          </div>
          <div className='mt-4 pt-4 border-t border-secondary/10'>
            <h4 className='text-secondary font-semibold text-[13px] uppercase tracking-wider mb-2'>Interests</h4>
            <p className='text-white-100 text-[12px] leading-[18px] opacity-80'>
              {personalInfo.interests.join(", ")}
            </p>
          </div>
        </HighlightCard>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
