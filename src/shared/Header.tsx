import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Header = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-roboto text-3xl font-bold text-gray-50 text-center'>
        {children}
    </h1>
  )
}

export default Header