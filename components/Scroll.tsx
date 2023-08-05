'use client';
import React, { FC, useEffect, useState } from 'react';
import { IMain } from '@/interfaces';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import HelloComponent from './Hello';
import ServicesComponent from './Services';
import WorkComponent from './Work';
import SkillsComponent from './Skills';
import ContactComponent from './Contact';
import CertificateComponent from './Certificate';

type VisibleItems = {
  hello: boolean;
  services: boolean;
  work: boolean;
  skills: boolean;
  certificates: boolean;
  onClick: () => void;
};

const Scroll: FC<IMain> = ({ Hello, Services, Work, Skills, Certificates }) => {
  const [visibleItems, setVisibleItems] = useState<VisibleItems>({
    hello: false,
    services: false,
    work: false,
    skills: false,
    certificates: false,
    onClick: () => {},
  });

  const [hello, setHello] = useState(true);
  const [services, setServices] = useState(false);
  const [work, setWork] = useState(false);
  const [skills, setSkills] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const handleClickHello = () => {
    setHello(true);
    setServices(false);
    setWork(false);
    setSkills(false);
    setCertificate(false);
  };

  const handleClickServices = () => {
    setHello(false);
    setServices(true);
    setWork(false);
    setSkills(false);
    setCertificate(false);
  };

  const handleClickWork = () => {
    setHello(false);
    setServices(false);
    setWork(true);
    setSkills(false);
    setCertificate(false);
  };

  const handleClickSkills = () => {
    setHello(false);
    setServices(false);
    setWork(false);
    setSkills(true);
    setCertificate(false);
  };

  const handleClickCertificates = () => {
    setHello(false);
    setServices(false);
    setWork(false);
    setSkills(false);
    setCertificate(true);
  };

  useEffect(() => {
    setVisibleItems((prevVisibleItems) => ({ ...prevVisibleItems, hello: true }));
    const delay = 400;

    const timeoutIds = [
      setTimeout(
        () =>
          setVisibleItems((prevVisibleItems) => ({
            ...prevVisibleItems,
            services: true,
          })),
        delay * 1
      ),
      setTimeout(
        () =>
          setVisibleItems((prevVisibleItems) => ({ ...prevVisibleItems, work: true })),
        delay * 2
      ),
      setTimeout(
        () =>
          setVisibleItems((prevVisibleItems) => ({ ...prevVisibleItems, skills: true })),
        delay * 3
      ),
      setTimeout(
        () =>
          setVisibleItems((prevVisibleItems) => ({
            ...prevVisibleItems,
            certificates: true,
          })),
        delay * 4
      ),
    ];

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  const IconAnimation = (visible: boolean) =>
    useSpring({
      opacity: visible ? 1 : 0,
      to: { opacity: visible ? 1 : 0 },
      config: { duration: 500 },
    });

  return (
    <div className=' flex p-4 justify-between items-center z-0 h-full w-4/5  flex-auto max-iphone:flex-col max-tab max-iphone:h-full  max-ipad:ml-2 max-ipad:w-4/5 max-tablet:w-full max-tablet:ml-0  max-iphone:mt-2 max-tablet:flex-col'>
      <ul className='text-2xl gap-10 max-tablet:gap-2 transform flex flex-col text-white text-center p-4 max-iphone:w-full max-iphone:flex-row max-iphone:gap-2 max-iphone:mt-6 max-smiphone:gap-2 max-smiphone:justify-center max-iphone:p-2 max-iphone:text-lg max-smiphone:mt-2  max-tablet:w-full max-tablet:flex-row max-tablet:mt-2 max-tablet:flex max-tablet:justify-center max-tablet:items-baseline max-tablet:p-0'>
        {hello ? (
          <Link href='#hello' onClick={handleClickHello}>
            <animated.li
              style={IconAnimation(visibleItems.hello)}
              className='bg-[#21D19F] transition-all flex
        justify-center rotate-[-15deg]  max-iphone:rotate-0 max-tablet:rotate-0 rounded-sm text-lg py-1 max-iphone:px-2 max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] tablet:border-r-[#21d19f] max-tablet:border-r-[1px] max-iphone:text-base max-tablet:justify-center max-smiphone:text-xs max-iphone:pr-2  max-tablet:px-4'
            >
              {Hello}
            </animated.li>
          </Link>
        ) : (
          <Link href='#hello' onClick={handleClickHello}>
            <animated.li
              style={IconAnimation(visibleItems.hello)}
              className=' transition-all flex
        justify-start  pl-6 max-iphone:pl-2 rotate-[-15deg]  max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] max-tablet:border-[#21d19f] max-tablet:border-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2  max-iphone:rotate-0 max-tablet:rotate-0 max-tablet:flex max-tablet:px-4 max-tablet:justify-center max-tablet:items-center max-tablet:text-center  rounded-sm text-lg'
            >
              {Hello}
            </animated.li>
          </Link>
        )}
        {services ? (
          <Link href='#services' onClick={handleClickServices}>
            <animated.li
              style={IconAnimation(visibleItems.services)}
              className='bg-[#21D19F] py-1 flex transition-all rounded-sm rotate-[-10deg]  max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] max-tablet:border-[#21d19f] max-tablet:border-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2 max-smiphone:px-2  max-iphone:rotate-0 max-tablet:rotate-0 px-8 max-iphone:px-0 ml-2 max-tablet:ml-0 max-iphone:-ml-0 items-center justify-center text-lg '
            >
              {Services}
            </animated.li>
          </Link>
        ) : (
          <Link href='#services' onClick={handleClickServices}>
            <animated.li
              style={IconAnimation(visibleItems.services)}
              className='hover:bg-[#36363644] transition-all hover:rounded-sm rotate-[-10deg]  max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] max-tablet:border-[#21d19f] max-tablet:border-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:px-2  max-iphone:rotate-0 max-tablet:rotate-0 rounded-sm  ml-4 max-iphone:ml-0 max-tablet:ml-0 px-6  items-center justify-center text-lg hover:justify-center hover:items-center hover:text-center hover:flex'
            >
              {Services}
            </animated.li>
          </Link>
        )}
        {work ? (
          <Link href='#Work' onClick={handleClickWork}>
            <animated.li
              style={IconAnimation(visibleItems.work)}
              className='bg-[#21D19F] py-1 transition-all rounded-sm px-6 max-iphone:px-0 max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] tablet:border-r-[#21d19f] max-tablet:border-r-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2 items-center justify-center text-lg max-smiphone:px-2'
            >
              {Work}
            </animated.li>
          </Link>
        ) : (
          <Link href='#Work' onClick={handleClickWork}>
            <animated.li
              style={IconAnimation(visibleItems.work)}
              className='hover:bg-[#36363644] transition-all hover:rounded-sm flex pl-2 justify-center text-lg max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] tablet:border-r-[#21d19f] max-tablet:border-r-[1px]  max-iphone:text-base max-smiphone:text-xs max-iphone:flex max-iphone:justify-center max-iphone:pl-2 max-smiphone:pr-2 max-tablet:border-[#21d19f] max-tablet:border-[1px] max-tablet:px-2 rounded-sm'
            >
              {Work}
            </animated.li>
          </Link>
        )}
        {skills ? (
          <Link href='#skills' onClick={handleClickSkills}>
            <animated.li
              style={IconAnimation(visibleItems.skills)}
              className='rotate-[10deg]   max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] max-tablet:border-[#21d19f] max-tablet:border-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2 max-iphone:rotate-0 max-tablet:rotate-0 rounded-sm py-1 bg-[#21D19F] transition-all  text-lg max-smiphone:px-2 max-tablet:px-4'
            >
              {Skills}
            </animated.li>
          </Link>
        ) : (
          <Link href='#skills' onClick={handleClickSkills}>
            <animated.li
              style={IconAnimation(visibleItems.skills)}
              className='rotate-[10deg]   max-iphone:border-r-[#21d19f] max-iphone:border-r-[1px] max-tablet:border-[#21d19f] max-tablet:border-[1px]   max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2 max-iphone:rotate-0 max-tablet:rotate-0  hover:bg-[#36363644] transition-all hover:rounded-sm text-lg max-tablet:px-2 items-center rounded-sm'
            >
              {Skills}
            </animated.li>
          </Link>
        )}
        {certificate ? (
          <Link href='#certificates' onClick={handleClickCertificates}>
            <animated.li
              style={IconAnimation(visibleItems.certificates)}
              className='bg-[#21D19F] transition-all py-1 rotate-[15deg]  max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2  max-iphone:rotate-0 max-tablet:rotate-0 rounded-sm  px-8 max-smiphone:px-2  items-center justify-center text-lg max-smiphone:flex-wrap'
            >
              {Certificates}
            </animated.li>
          </Link>
        ) : (
          <Link href='#certificates' onClick={handleClickCertificates}>
            <animated.li
              style={IconAnimation(visibleItems.certificates)}
              className='text-lg hover:bg-[#36363644] transition-all hover:rounded-sm rotate-[15deg]    max-iphone:text-base max-smiphone:text-xs max-iphone:pr-2  max-iphone:rotate-0 max-tablet:rotate-0 rounded-sm flex justify-center pr-3 max-tablet:border-[#21d19f] max-tablet:border-[1px] max-tablet:px-2 items-center max-smiphone:flex-wrap'
            >
              {Certificates}
            </animated.li>
          </Link>
        )}
      </ul>
      {hello && <HelloComponent />}
      {services && <ServicesComponent />}
      {work && <WorkComponent />}
      {skills && <SkillsComponent />}
      {certificate && <CertificateComponent />}
    </div>
  );
};

export default Scroll;
