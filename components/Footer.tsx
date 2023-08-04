import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='text-[#3a3a3a79] w-screen absolute max-tablet:block bottom-0 bg-black text-center max-iphone:items-end max-iphone:absolute items-center justify-center max-iphone:mt-4 max-ipad:mt-4 max-ipad:bottom-0 max-ipad:text-xs max-iphone:hidden border'>
      <p className='text-[#d4d4d479] p-1 z-10 max-iphone:text-xs'>© 2023 Meu Site. Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer;