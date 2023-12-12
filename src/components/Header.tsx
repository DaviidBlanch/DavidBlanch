export default function Header() {
    return (
        <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-30">
            <div className="flex flex-grow basis-0 text-2xl font-bold">
                {'{'} <span className="text-[#fb5eff] px-1">David Blanch</span>{'}'}
            </div>
            <nav className="flex flex-grow justify-center">
                <ul className="flex text-sm [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 hover:[&>li>a]:underline">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}