import { projects } from '../../data/projects'
import Project from '../components/Project'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center animate__animated animate__backInLeft">

      <h1 className="text-2xl font-bold uppercase text-left my-5">Some of My Projects</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
        {
          projects.map(e => (
            <Project key={e.src} src={e.src} href={e.href} title={e.title} techStack={e.techStack} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects