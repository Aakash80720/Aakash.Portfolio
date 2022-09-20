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
            Fresher
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          I'm Aakash R, a Fresher with  Industrial working Experience in the Technologies I mentioned. 
          I'm more flexible with working with new technologies. I'll work hard and put a cent percent effort into the Tasks. 
          I'm friendly of nature and easy to collab with colleagues. I'm seeking the opportunity to prove my selves 
          with technical and interpersonal skills 
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            I'm Starting my career more eager to learn new technologies, then adopt and sustain 
            with the different Suituation that will develop me more as a person.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
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
          <p className='py-2 text-gray-600 text-justify'>
          As a Software Developer trainee begins with learning java, Postgres, tomcat, and product-related technologies. 
          As part of the development tickets resolving and improves existed functionalities, 
          Then fixing Issues and majorly analyzing events then optimizing them.
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