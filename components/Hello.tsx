import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Hello: React.FC = () => {
  const [title, setTitle] = useState('');
  const [desenvolvedor, setDesenvolvedor] = useState('');
  const [isFullStack, setIsFullStack] = useState(true);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const fullTitle = "Hello I'm";
    let currentText = '';

    const interval = setInterval(() => {
      currentText = fullTitle.slice(0, currentText.length + 1);
      setTitle(currentText);
      if (currentText === fullTitle) clearInterval(interval);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullText2 = 'Desenvolvedor FullStack';
    const fullText1 = 'Analista de Sistemas';
    let currentText2 = '';

    const interval2 = setInterval(() => {
      if (!animationCompleted) {
        if (isFullStack) {
          currentText2 = fullText1.slice(0, currentText2.length + 1);
          setDesenvolvedor(currentText2);
          if (currentText2 === fullText1) {
            setIsFullStack(false);
          }
        } else {
          currentText2 = fullText2.slice(0, currentText2.length + 1);
          setDesenvolvedor(currentText2);
          if (currentText2 === fullText2) {
            setIsFullStack(true);
            setAnimationCompleted(true);
          }
        }
      }
    }, 100);

    return () => clearInterval(interval2);
  }, [animationCompleted, isFullStack]);

  return (
    <motion.div
      className='text-white ml-24 w-full gap-4 h-full justify-center flex items-center max-ipad:ml-0'
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.5, ease: 'linear' }}
    >
      <section className='max-tablet:hidden'>
        <motion.p className='text-[26rem] text-[#3a3a3a79] font-thin'>&#123;</motion.p>
      </section>
      <section className='gap-8 flex flex-col max-tablet:gap-4'>
        <motion.h1 className='sm:text-4xl text-center max-tablet:text-4xl'>
          <strong className='text-[#21D19F]'>{title}</strong> Anderson
        </motion.h1>
        <motion.p className='mt-6 text-center text-lg break-all indent-4  mr-4'>
          <strong className='text-[#21D19F]'>{desenvolvedor}</strong>, especializado em criar soluções
          web envolventes e completas. Sou apaixonado por desenvolver experiências web excepcionais, combinando
          criatividade e funcionalidade para alcançar resultados significativos.
        </motion.p>
          <motion.p className='mt-8 text-center'>
            Vamos construir algo incrível juntos{' '}
            <motion.span style={{ fontSize: '2rem' }} className='text-[#21D19F] text-sm'>
              !
            </motion.span>
          </motion.p>
      </section>
    </motion.div>
  );
};

export default Hello;
