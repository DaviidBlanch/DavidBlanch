import '../styles/navegation.css'

export default function Header() {
    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-30">
            <div className="flex flex-grow basis-0 text-2xl font-bold">
                {'{'}
                <span className="px-1 logo">David Blanch</span>
                {'}'}
            </div>
            <nav className="flex flex-grow justify-center">
                <ul className="flex text-sm [&>li>a]:font-medium gap-10">
                    <li><a href="#" className='underline-animation'>About</a></li>
                    <li><a href="#" className='underline-animation'>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}