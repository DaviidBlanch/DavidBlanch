import { NavLink as NewNavLink } from "react-router-dom"

interface Props {
    to: string
    children: React.ReactNode
}

export const NavLink: React.FC<Props> = ({ to, children, ...props }) => {
    return (
        <NewNavLink
            to={to}
            className={({ isActive }) => {
                return isActive ? 'isActive' : undefined
            }}
            {...props}
        >
            {children}
        </NewNavLink>
    )
}