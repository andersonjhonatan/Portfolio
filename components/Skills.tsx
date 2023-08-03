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
    <div className='text-white w-full gap-8 max-ipad:gap-2 max-tablet:gap-4 max-tablet:mt-2 justify-center flex items-center p-4 h-full max-tablet:p-0 max-tablet:flex-col'>
      <section className='mr-8 max-ipad:hidden'>
        <p className='text-[25rem] text-[#3a3a3a79] font-thin '>&#123;</p>
      </section>
      <h1 className='text-3xl mt-6 max-ipad:mt-0 max-ipad:mb-2 max-ipad:text-2xl tablet:hidden'>
        Skills<span className='text-[#21d19f] text-2xl max-ipad:text-lg'>.</span>
      </h1>
      <section className='flex flex-col h-full items-center gap-3 max-tablet:gap-0 p-4 max-tablet:p-0 max-tablet:justify-between max-ipad:gap-1 max-ipad:h-full max-ipad:w-full max-ipad:justify-center max-tablet:flex max-tablet:flex-row '>
        <h1 className='text-3xl mt-6 max-ipad:mt-0 max-ipad:mb-2 max-ipad:text-2xl  max-tablet:hidden'>
          Skills<span className='text-[#21d19f] text-2xl max-ipad:text-lg'>.</span>
        </h1>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-4 gap-2 max-tablet:gap-1 text-center p-2 max-ipad:p-0  max-tablet:h-full max-tablet:w-80 max-tablet:place-content-center'
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
                    className='text-[#21d19fbd] hover:text-[#21d19f] border border-[#111111] hover:border-[#21d19f] duration-300 delay-150 ease-in  bg-[#080808] rounded-sm text-4xl p-8 max-ipad:p-5 max-tablet:p-2 max-tablet:text-4xl max-tablet:flex max-tablet:justify-center'
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setSelectedId(id as number)}
                    onClick={() => setSelectedId(id as number)}
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
              className=' flex items-center text-center p-2 max-w-sm max-ipad:w-8/12 justify-center max-tablet:w-3/6 max-tablet:ml-2 max-tablet:flex-col max-tablet:gap-4'
            >
              <section className='sm:w-2/3 items-center flex justify-center gap-1 max-tablet:mr-4 tablet:hidden'>
                <p className='text-[#21d19f] text-lg'>*</p>
                <p className='text-[#727272] max-tablet:hidden'>
                  Passe o mouse sobre as Skills
                </p>
                <p className='text-[#727272] tablet:hidden'>
                  Clique para ver os detalhes
                </p>
              </section>
              <motion.section
                key={selectedId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='flex justify-center items-center w-full p-2 border border-[#111111] rounded-sm'
              >
                <motion.div
                  className='text-[#21d19f9a] border border-[#111111] duration-300 delay-150 ease-in bg-[#080808] rounded-sm text-4xl p-3 max-ipad:text-2xl  max-ipad:p-1'
                  transition={{ duration: 0.1 }}
                  onClick={() => setSelectedId(null)}
                >
                  <p>{sectionsSkills[selectedId].name}</p>
                </motion.div>
                <p className='text-start pl-4 max-ipad:text-sm'>
                  {sectionsSkills[selectedId].state}
                </p>
              </motion.section>
            </motion.div>
          ): (
            <section className='sm:w-2/3 items-center flex justify-center gap-1 max-tablet:mr-4'>
            <p className='text-[#21d19f] text-lg'>*</p>
            <p className='text-[#727272] max-tablet:hidden'>
              Passe o mouse sobre as Skills
            </p>
            <p className='text-[#727272] tablet:hidden'>
              Clique para ver os detalhes
            </p>
          </section>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Skills;
