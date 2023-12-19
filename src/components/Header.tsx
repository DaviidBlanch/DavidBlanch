import '../styles/navegation.css'
import { NavLink } from 'react-router-dom'

import GitHub from '../assets/socialNetwork-logos/GitHub-logo.webp'
import { Linkedin } from '../assets/socialNetwork-logos/LinkedIn'

export default function Header() {
    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-30">
            <div className="flex flex-grow basis-0 text-2xl">
                <NavLink to="/" className="logo-container">
                    <span className="px-1 logo font-bold">David Blanch</span>
                </NavLink>
            </div>
            <nav className="flex flex-grow justify-center">
                <ul className="flex [&>li>a]:font-medium gap-10">
                    <li><NavLink
                        className={({ isActive }) => {
                            return isActive ? 'is-active' : undefined
                        }} to="/about"
                    ><span className="underline-animation">About</span></NavLink></li>
                    <li>
                        <NavLink
                            className={({ isActive }) => {
                                return isActive ? 'is-active' : undefined
                            }}
                            to="/contactMe"
                        ><span className="underline-animation">Contact Me</span></NavLink></li>
                    <li><a
                        href='https://github.com/DaviidBlanch'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={GitHub}
                            alt='Github'
                            className='w-full h-6 hover:scale-110 transition-transform duration-300'
                        />
                    </a></li>
                    <li><a
                        href='https://www.linkedin.com/in/david-blanch-bellido/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Linkedin />
                    </a></li>
                </ul>
            </nav>
        </header>
    )
}