import ContactMe from "./ContactMe";
import Experiences from "./Experiences"
import Navegation from "./Navegation"
import Projects from "./Projects"
import Skills from "./Skills"

import { Routes, Route } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            <section className="col-span-2 p-3 overflow-y mt-24 z-20">
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contactMe" element={<ContactMe />} />
                </Routes>
            </section>
            <section className="flex items-center justify-center z-10">
                <Navegation />
            </section>
        </div>
    )
}