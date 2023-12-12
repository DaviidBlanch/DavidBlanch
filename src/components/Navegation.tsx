import "./Navegation.css"
import { NavLink } from "./NewNavLink"

export default function Navegation() {
    return (
        <nav className="fixed top-0 right-0 mt-56 text-right pr-10">
            <ul className="text-3xl -tracking-wider [&>li>a]:font-bold hover:[&>li>a]:text-[#fb5eff]">
                <li><NavLink to="/" ><span className="text-sm font-bold">(3)</span>PROJECTS</NavLink></li>
                <li><NavLink to="/experiences"><span className="text-sm font-bold">(1)</span>EXPERIENCES</NavLink></li>
                <li><NavLink to="/studies"><span className="text-sm font-bold">(3)</span>STUDIES</NavLink></li>
            </ul>
        </nav>
    )
}