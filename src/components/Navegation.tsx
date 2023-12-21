import { NavLink } from "./NewNavLink"
import "../styles/navegation.css"

export default function Navegation() {
    return (
        <nav className="fixed top-0 right-0 mt-48 text-right pr-10">
            <ul className="text-3xl hover:[&>li>a]:text-[#0077B5]">
                <li><NavLink to="/"><span className="nav-word text-sm font-bold text-black">(2) </span>PROJECTS</NavLink></li>
                <li><NavLink to="/experiences"><span className="nav-word text-sm font-bold text-black">(1) </span>EXPERIENCES</NavLink></li>
                <li><NavLink to="/skills"><span className="nav-word text-sm font-bold text-black">(7) </span>SKILLS</NavLink></li>
            </ul>
        </nav>
    )
}