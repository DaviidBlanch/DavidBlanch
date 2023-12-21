import '../styles/navegation.css'
import { Link, NavLink } from 'react-router-dom'

import GitHub from '../assets/socialNetwork-logos/GitHub-logo.webp'

export default function Header() {
    return (
        <>
            <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-30">
                <div className="flex flex-grow basis-0 lg:text-2xl md:text-2xl sm:text-2xl">
                    <NavLink to="/" className="logo-container">
                        <span className="px-1 logo font-bold">DAVID BLANCH</span>
                    </NavLink>
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
                                className='w-full h-6 hover:scale-110 transition-transform duration-300'
                            />
                        </a></li>
                        <li><a
                            href='https://www.linkedin.com/in/david-blanch-bellido/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src='src/assets/socialNetwork-logos/LinkedIn.svg'
                                alt='LinkedIn logo'
                                className='w-full h-6 hover:scale-110 transition-transform duration-300'
                            />
                        </a></li>
                    </ul>
                </nav>
            </header>
            <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-black lg:hidden">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                    <div className="inline-flex flex-col items-center justify-center font-medium px-5 group">
                        <Link to="/">
                            <span className="text-sm text-white group-hover:text-[#0077B5]">PROJECTS</span>
                        </Link>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center font-medium px-5 group">
                        <Link to="/experiences">
                            <span className="text-sm text-white group-hover:text-[#0077B5]">EXPERIENCES</span>
                        </Link>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center font-medium px-5 group">
                        <Link to="/skills">
                            <span className="text-sm text-white group-hover:text-[#0077B5]">SKILLS</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}