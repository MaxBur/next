import React from 'react'

import Head from 'next/head'


import ALink from './ALink'

const MainContainer = ({ children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={"zazaz tk" + keywords} />
                <title> {title} </title>
            </Head>
            <div className='navbar'>
                <ALink href='/' text='Главная' />
                <ALink href='/users' text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer