import { ReactIcon, TypeScript } from '../assets/frameworks-logos/Icons'
import '../styles/skills.css'

// const URL_SKILLS = "https://run.mocky.io/v3/dffcd1d1-668d-4d03-957d-7f9140706cd8"

export default function Skills() {

    // const [skillData, setSkillData] = useState<SkillsItems[]>()

    // useEffect(() => {
    //     fetch(URL_SKILLS)
    //         .then(res => res.json())
    //         .then((data: SkillResponse) => {
    //             if (!data) return
    //             setSkillData(data.skills)
    //         })
    //         .catch(error => console.error(error))
    // }, [])

    return (
        <div className="p-2 pt-0 mb-20 lg:pl-10">
            {/* {
                skillData?.map(skill => (
                    <div key={skill.id} className="mb-3">
                        <div className="flex justify-between mb-1">
                            <img src={skill.src} alt={skill.alt} />
                            <span className={`text-sm font-medium`} style={{ color: skill.color }}>{skill.progreso}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className={`h-2.5 rounded-full animated-progress-bar`}
                                style={{ width: skill.progreso, backgroundColor:skill.color }}
                            />
                        </div>
                    </div>
                ))
            } */}

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
                    <TypeScript />
                    <span className={`text-sm font-medium`} style={{ color: "#3178c6" }}>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full animated-progress-bar`}
                        style={{ width: "70%", backgroundColor: "#3178c6" }}
                    />
                </div>
            </div>
        </div>
    )
}