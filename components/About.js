import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Profile.png"
const About = () => {
    return ( 
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / As a Fresher
          </p>
          <p className='py-2 text-gray-600'>
            I'm Starting my career more eager to learn new technologies, then adopt and sustain 
            with the different Suituation that will develop me more as a person.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <p className='py-2 pt-2 uppercase text-xl tracking-widest text-[#5651e5]'>
            intern experience
          </p>
          <h5 className='py-3'>ZOHO Corparation</h5>
          <p className='py-2 text-gray-600'>
            As intern student as Software Developer begins with learn java , postgres , tomcat and product related technologies ideology.
            As part of the development in the application was solving the ticket and
            impove the existing functionality ,Then fix the Issues in live.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
        
     );
}
 
export default About;