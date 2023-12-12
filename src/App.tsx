function App() {
  return (
    <main>
      <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between bg-gray-700">
        <div className="flex flex-grow basis-0 text-2xl font-bold">
          David Blanch
        </div>
        <nav className="flex flex-grow justify-center">
          <ul className="flex text-sm [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <div className="grid grid-cols-3 px-10 h-screen">
        <section className="col-span-2 overflow-y bg-orange-300 mt-40">
          Imagenes
        </section>
        <section className="col-span-1">
          <nav className="fixed right-0 mt-40 text-right pr-10">
            <ul className="[&>li>a]:text-2xl [&>li>a]:font-bold hover:[&>li>a]:text-[#fb5eff]">
              <li><a href="#">PROJECT</a></li>
              <li><a href="#">EXPERIENCE</a></li>
              <li><a href="#">STUDIES</a></li>
              <li><a href="#">SOUND DESIGN</a></li>
              <li><a href="#">MIX</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </main>
  )
}

export default App
