
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

// import { getHeader } from '../../sanity.query'

const Layout = ({children}:{children:React.ReactNode} ) => {
  
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;