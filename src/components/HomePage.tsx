import Experiences from "./Experiences"
import Navegation from "./Navegation"
import Projects from "./Projects"
import Skills from "./Skills"

import { Routes, Route } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
            <section className="col-span-2 p-3 overflow-y mt-24 z-20">
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </section>
            <section className="lg:flex items-center justify-center z-10 hidden">
                <Navegation />
            </section>
        </div>
    )
}