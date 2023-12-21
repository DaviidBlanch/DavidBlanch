import '../styles/navegation.css'
import { NavLink as NavL } from 'react-router-dom'

import GitHub from '../assets/socialNetwork-logos/GitHub-logo.webp'
import Footer from './Footer'
import LinkedIn from '../assets/socialNetwork-logos/LinkedIn'

export default function Header() {
    return (
        <>
            <header className="bg-header py-3 px-10 flex items-center fixed top-0 w-full justify-between z-30">
                <div className="flex flex-grow basis-0 lg:text-2xl md:text-2xl sm:text-2xl">
                    <NavL to="/" className="logo-container flex">
                        <h1 className="px-1 logo font-bold">DAVID BLANCH</h1>
                    </NavL>
                </div>
                <nav className="flex flex-grow justify-center">
                    <ul className="flex [&>li>a]:font-medium gap-10">
                        <li><a
                            href='https://github.com/DaviidBlanch'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={GitHub}
                                alt='Github logo'
                                className='w-6 h-6 hover:scale-110 transition-transform duration-300'
                            />
                        </a></li>
                        <li><a
                            href='https://www.linkedin.com/in/david-blanch-bellido/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            {/* <img
                                src='src/assets/socialNetwork-logos/LinkedIn.svg'
                                alt='LinkedIn logo'
                                className='w-full h-6 hover:scale-110 transition-transform duration-300'
                            /> */}
                            <LinkedIn />
                        </a></li>
                    </ul>
                </nav>
            </header>
            <Footer />
        </>
    )
}