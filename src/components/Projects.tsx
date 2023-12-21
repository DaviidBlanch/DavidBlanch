import '../styles/projects.css'
import ExpressBtn from './Buttons/ExpressBtn'
import MongoBtn from './Buttons/MongoBtn'
import NodeBtn from './Buttons/NodeBtn'
import ReactBtn from './Buttons/ReactBtn'
import TailwindBtn from './Buttons/TailwindBtn'
import TypeScriptBtn from './Buttons/TypeScriptBtn'
import devQ from '../assets/projectLogos/devQ.webp'
import forday from '../assets/projectLogos/4day.webp'


export default function Projects() {

    return (
        <div className="p-3 grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-16 mb-20">
            <div>
                <div
                    className="image-container rounded-lg shadow-lg shadow-zinc-600"
                >
                    <picture>
                        <img
                            src={devQ}
                            alt="devQ logo"
                            className="image z-10 rounded-lg"
                        />
                    </picture>
                    <div className="overlay p-2 grid grid-cols-3 content-end">
                        <ReactBtn />
                        <TypeScriptBtn />
                        <TailwindBtn />
                        <NodeBtn />
                        <ExpressBtn />
                        <MongoBtn />
                    </div>
                </div>
                <h1 className="text-base font-medium font-sans ml-[10px]">devQ - Developer Interview Platform</h1>
            </div>
            <div>
                <div
                    className="image-container rounded-lg shadow-lg shadow-zinc-600"
                >
                    <picture>
                        <img
                            src={forday}
                            alt="4day logo"
                            className="image z-10 rounded-lg"
                        />
                    </picture>
                    <div className="overlay p-2 grid grid-cols-3 content-end">
                        <ReactBtn />
                        <TypeScriptBtn />
                        <NodeBtn />
                        <ExpressBtn />
                        <MongoBtn />
                    </div>
                </div>
                <h1 className="text-base font-medium font-sans ml-[10px]">4day - Hospitality Job Network</h1>
            </div>
        </div>
    )
}