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
  }

  useEffect(() => {
    setVisibleItems((prevVisibleItems) => ({ ...prevVisibleItems, hello: true }));
    const delay = 400;

    const timeoutIds = [
      setTimeout(
        () =>
          setVisibleItems((prevVisibleItems) => ({...prevVisibleItems, services: true })),
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
          setVisibleItems((prevVisibleItems) => ({ ...prevVisibleItems, certificates: true })),
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
    <div className=' flex p-4 justify-between items-center z-0 h-full w-4/5 flex-auto max-iphone:flex-col max-iphone:h-full'>
      <ul className='text-2xl gap-10 transform flex flex-col   text-white text-center p-4 0 max-iphone:w-full max-iphone:flex-row'>
        {hello ? (
          <Link
            href='#hello'
            onClick={handleClickHello}
            className='bg-[#21D19F] transition-all flex
        justify-center rotate-[-15deg] rounded-sm text-lg py-1'
          >
            <animated.li style={IconAnimation(visibleItems.hello)}>{Hello}</animated.li>
          </Link>
        ) : (
          <Link
            href='#hello'
            onClick={handleClickHello}
            className=' transition-all flex
        justify-start  pl-6 rotate-[-15deg] rounded-sm text-lg '
          >
            <animated.li style={IconAnimation(visibleItems.hello)}>{Hello}</animated.li>
          </Link>
        )}
        {services ? (
          <Link
            href='#services'
            onClick={handleClickServices}
            className='bg-[#21D19F] py-1 transition-all rounded-sm rotate-[-10deg] px-8 ml-2 items-center justify-center text-lg'
          >
            <animated.li style={IconAnimation(visibleItems.services)}>
              {Services}
            </animated.li>
          </Link>
        ) : (
          <Link
            href='#services'
            onClick={handleClickServices}
            className='hover:bg-[#36363644] transition-all hover:rounded-sm rotate-[-10deg] ml-4 px-6 items-center justify-center text-lg hover:justify-center hover:items-center hover:text-center hover:flex'
          >
            <animated.li style={IconAnimation(visibleItems.services)}>
              {Services}
            </animated.li>
          </Link>
        )}
        {work ? (
          <Link
            href='#Work'
            onClick={handleClickWork}
            className='bg-[#21D19F] py-1 transition-all rounded-sm px-6 items-center justify-center text-lg'
          >
            <animated.li style={IconAnimation(visibleItems.work)}>{Work}</animated.li>
          </Link>
        ) : (
          <Link
            href='#Work'
            onClick={handleClickWork}
            className='hover:bg-[#36363644] transition-all hover:rounded-sm flex pl-2 justify-center text-lg'
          >
            <animated.li style={IconAnimation(visibleItems.work)}>{Work}</animated.li>
          </Link>
        )}
        {skills ? (
          <Link
            href='#skills'
            onClick={handleClickSkills}
            className='rotate-[10deg] py-1 bg-[#21D19F] transition-all rounded-sm text-lg'
          >
            <animated.li style={IconAnimation(visibleItems.skills)}>{Skills}</animated.li>
          </Link>
        ) : (
          <Link
            href='#skills'
            onClick={handleClickSkills}
            className='rotate-[10deg] hover:bg-[#36363644] transition-all hover:rounded-sm text-lg'
          >
            <animated.li style={IconAnimation(visibleItems.skills)}>{Skills}</animated.li>
          </Link>
        )}
        {certificate ? (
            <Link
              href='#certificates'
              onClick={handleClickCertificates}
              className='bg-[#21D19F] transition-all py-1 rotate-[15deg] rounded-sm px-8 items-center justify-center text-lg'
            >
              <animated.li style={IconAnimation(visibleItems.certificates)}>
                {Certificates}
              </animated.li>
            </Link>
        ) : (
            <Link
              href='#certificates'
              onClick={handleClickCertificates}
              className='text-lg hover:bg-[#36363644] transition-all hover:rounded-sm rotate-[15deg] flex justify-center pr-3'
            >
              <animated.li style={IconAnimation(visibleItems.certificates)}>
                {Certificates}
              </animated.li>
            </Link>
        )}
      </ul>
      {hello && <HelloComponent />}
      {services && <ServicesComponent />}
      {work && <WorkComponent />}
      {skills && <SkillsComponent />}
      {certificate && <CertificateComponent  />}
    </div>
  );
};

export default Scroll;