import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const resume = () => {
  return (
    <>
    <Navbar/>
      <Head>
        <title>Aakash | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Aakash Rajendran</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/aakash-rajendran-aa586a1a7/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Aakash80720/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Java Developer</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development fresher
          with technical Knowledge and problem analysing skill to give the better solution.\
         Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Fresher  with solid interpersonal abilities and complex problem-solving skills.
          Effective and person with critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>JAVASCRIPT
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span>Ajax
            <span className='px-2'>|</span>JQuery
            <p className='py-2'>
                <span className='font-bold'>Core Language</span>
                <span className='px-2'>|</span>JAVA
                <span className='px-2'>|</span> Python
                <span className='px-2'>|</span> C
            </p>
          </p>
          <p className='py-2'>
            <span className='font-bold'>DBMS</span>
            <span className='px-2'>|</span>Postgres
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Intern Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              ZOHO Corpration
            </span>
            <span className='px-2'>|</span>Chennai, Tamil Nadu
          </p>
          <p className='py-1 italic'>Sotware Developer(2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            As intern student as Software Developer  begins with learn java , postgres , tomcat
            and product related technologies ideology.

            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
            As part of the development in the application was solving the ticket and
            impove the existing functionality
            </li>
            <li>
                Impove the existing functionality ,Then fix the Issues in live.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Other Academic Project</span></p>
          <p className='py-1 italic'>College (2020 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Business analysis data modelling and visulizing model in python that help me to learn more on Data handling and processing
            </li>
            <li>
              Movie DB website to learn the web technologies 
            </li>
            
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default resume;
