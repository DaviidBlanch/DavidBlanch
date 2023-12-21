import { ReactIcon, TypeScriptIcon, AngularIcon, TailwindCssIcon, NodeJsIcon, ExpressJsIcon, MongoDBIcon } from '../assets/frameworks-logos/Icons'
import '../styles/skills.css'

export default function Skills() {

    return (
        <div className="p-2 pt-0 mb-20 lg:pl-10">
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <ReactIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#087EA4" }}>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "70%", backgroundColor: "#087EA4" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <TypeScriptIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#3178c6" }}>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "70%", backgroundColor: "#3178c6" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <AngularIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#d32f2f" }}>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "60%", backgroundColor: "#d32f2f" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <TailwindCssIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#38bdf8" }}>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "60%", backgroundColor: "#38bdf8" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <NodeJsIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#026E00" }}>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "50%", backgroundColor: "#026E00" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <ExpressJsIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#353535" }}>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "50%", backgroundColor: "#353535" }}
                    />
                </div>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1">
                    <MongoDBIcon />
                    <span className={`text-sm font-medium`} style={{ color: "#42494f" }}>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "50%", backgroundColor: "#42494f" }}
                    />
                </div>
            </div>
        </div>
    )
}