import { NavLink } from './NewNavLink'
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-black lg:hidden">
            <ul className="grid h-full max-w-lg grid-cols-3 mx-auto">
                <li className="inline-flex flex-col items-center justify-center font-medium px-5"><NavLink to="/"><span className="hover:text-[#0077B5]">PROJECTS</span></NavLink></li>
                <li className="inline-flex flex-col items-center justify-center font-medium px-5"><NavLink to="/experiences"><span className="hover:text-[#0077B5]">EXPERIENCES</span></NavLink></li>
                <li className="inline-flex flex-col items-center justify-center font-medium px-5"><NavLink to="/skills"><span className="hover:text-[#0077B5]">SKILLS</span></NavLink></li>
            </ul>
        </footer>
    )
}