import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionsSkills } from '@/constants/index';
import { Skill } from '@/types/Skill';

const Skills: React.FC = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // Definimos um timer para mostrar as habilidades uma após a outra
    const timer = setTimeout(() => {
      setShowSkills(true);
    }); // Defina o tempo desejado entre a exibição de cada habilidade

    // Limpe o timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='text-white w-full gap-8 justify-center flex items-center p-4'>
      <section className='mr-8'>
        <p className='text-[25rem] text-[#3a3a3a79] font-thin '>&#123;</p>
      </section>
      <section className='flex flex-col h-full items-center gap-3 p-4'>
        <h1 className='text-3xl mt-6'>
          Skills<span className='text-[#21d19f] text-2xl'>.</span>
        </h1>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-4 gap-2 text-center p-2'
        >
          {sectionsSkills.map(
            ({ name, active, id }: Skill) =>
              active && (
                <motion.section
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: (id as number) * 0.3 }}
                >
                  <motion.div
                    className='text-[#21d19fbd] hover:text-[#21d19f] border border-[#111111] hover:border-[#21d19f] duration-300 delay-150 ease-in  bg-[#080808] rounded-sm text-4xl p-8'
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setSelectedId(id as number)}
                  >
                    {name}
                  </motion.div>
                </motion.section>
              )
          )}
        </motion.section>
        <AnimatePresence>
          {selectedId ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className=' flex items-center text-center p-2 max-w-sm justify-center '
            >
              <motion.section
                key={selectedId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='flex justify-center items-center w-full p-2 border border-[#111111] rounded-sm'
              >
                <motion.div
                  className='text-[#21d19f9a] border border-[#111111] duration-300 delay-150 ease-in bg-[#080808] rounded-sm text-4xl p-3'
                  transition={{ duration: 0.1 }}
                  onClick={() => setSelectedId(null)}
                >
                  <p>{sectionsSkills[selectedId].name}</p>
                </motion.div>
                <p className='text-start pl-4'>{sectionsSkills[selectedId].state}</p>
              </motion.section>
            </motion.div>
          ) : (
            <section className='sm:w-2/3 items-center flex justify-center gap-1'>
              <p className='text-[#21d19f] text-lg'>*</p>
              <p className='text-[#727272] '>Passe o mouse sobre as Skills</p>
            </section>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Skills;
