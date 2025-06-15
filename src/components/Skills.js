import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFastapi, SiJavascript, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Python', icon: FaPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Figma', icon: FaFigma },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white flex flex-col items-center animate-fade-in"
    >
      <h2 className="section-title mb-8">Skills & Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 bg-gray-900 p-4 rounded-lg shadow transition-all duration-500 ease-out animate-slide-up group hover:bg-accent hover:shadow-2xl hover:scale-105"
          >
            <Icon className="text-4xl text-accent group-hover:text-white transition-all duration-500" />
            <span className="text-sm font-medium mt-1 group-hover:text-white transition-all duration-500">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
