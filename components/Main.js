import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return ( 
        <div className="w-full flex h-screen text-center">
            <div className=" max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Career starts with wide view of Creativity
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e2]">Aakash </span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Front-End Web Developer and Java Developer.
                    </h1>
                    <p className="py-4 text-gray-600 m-auto max-w-[70%]">
                    Looking for opportunities to Specializing in Building and Developing Projects . I can utilize my skills and Knowledge in adaptive conditions to work in a firm.
                     Then upgrade me to achieve my Goal and work for the development
                    of the organization.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <Link href='https://www.linkedin.com/in/aakash-rajendran-aa586a1a7/'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                    </Link>
                            
                    <Link href='https://github.com/Aakash80720/'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                                <FaGithub/>
                            </div>
                    </Link>      
                    <Link href='/resume'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </Link>
                    </div>
                    <h6 className="py-4 text-gray-800 m-auto max-w-[70%]">
                        Mail id : <span className="text-gray-600 m-auto max-w-[70%]">
                            aakashrajendran860@gmail.com
                        </span>
                    </h6>

                </div>
            </div>

        </div>
     );
}
 
export default Main;