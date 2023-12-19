import CapgeminiLogo from '../assets/empresa-logos/capgemini_logo.jpg'
import '../styles/experiences.css'

export default function Experiences() {
    return (
        <div className="p-2 pl-10">
            <div className='flex'>
                <a
                    href='https://www.capgemini.com/es-es/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center'
                >
                    <span className='underline-animation'>Capgemini</span>
                    <img
                        src={CapgeminiLogo}
                        alt='Capgemini logo'
                        className='h-9 w-9 ml-2'
                    />
                </a>
            </div>
            <ol className="relative border-s border-black ml-2">
                <li className="mb-5 ms-4">
                    <div className="pulser absolute w-3 h-3 bg-[#0077B5] rounded-full mt-1.5 -start-1.5 border"></div>
                    <h3 className="text-lg text-black">Junior Software Engineer</h3>
                    <time className="mb-1 font-serif text-sm leading-none text-gray-600">march 2023 - present · 10 months</time>
                    <p className="text-base font-sans text-black">•Incident management and Small Works/Tasks in Aarhus, Denmark <span className='font-semibold'>(React, TypeScript)</span>.</p>
                    <p className="text-base font-sans text-black">•Internal project development <span className='font-semibold'>(Angular, GitLab)</span> .</p>

                </li>
                <li className="mb-5 ms-4">
                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <h3 className="text-lg text-black">Junior Software Engineer</h3>
                    <time className="mb-1 font-serif text-sm leading-none text-gray-600">july 2023 - october 2023 · 3 months</time>
                    <p className="text-base font-sans text-black">•Incident management and Small Works/Tasks in Aarhus, Denmark <span className='font-semibold'>(React, TypeScript)</span>.</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <h3 className="text-lg text-black">Cloud & Custom Applications Intern</h3>
                    <time className="mb-1 font-serif text-sm leading-none text-gray-600">june 2022 - december 2022 · 7 months</time>
                    <p className="text-base font-sans text-black">•Web development using SQL developer, Java and JavaScript.</p>
                    <p className="text-base font-sans text-black">•CRUD in React and Angular.</p>
                    <p className="text-base font-sans text-black">•Git management.</p>
                    <p className="text-base font-sans text-black">•Activity management in JIRA.</p>
                    <p className="text-base font-sans text-black">•Massive data insertion in PostgreSQL.</p>
                </li>
            </ol>
        </div>
    )
}