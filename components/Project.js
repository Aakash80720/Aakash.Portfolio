import ProjectItem from "./ProjectItems";
import Img from '../public/assets/projects/Capture1.PNG';

const Project = () => {
    return ( 
        <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Projects
          </p>
          <h2 className='py-4'>What I&apos;ve Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
              title='Educational Forum'
              backgroundImg={Img}
              projectUrl='/eduforum'
              tech='React JS'
            />
          </div>
        </div>
      </div>
     );
}
 
export default Project;