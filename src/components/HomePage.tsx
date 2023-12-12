import Experiences from "./Experiences"
import Navegation from "./Navegation"
import Projects from "./Projects"
import Studies from "./Studies"

import { Routes, Route } from 'react-router-dom';


export default function HomePage() {
    return (
        <div className="grid grid-cols-3 px-10 h-screen">
            <section className="col-span-2 overflow-y mt-40 z-20">
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/studies" element={<Studies />} />
                </Routes>
            </section>
            <section className="col-span-1 flex items-center justify-center z-10">
                <Navegation />
            </section>
        </div>
    )
}