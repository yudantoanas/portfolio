"use client"
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaLaptopCode, FaDownload } from "react-icons/fa6";

const stacks = [
  "Java",
  "Kotlin",
  "Golang",
  "PHP",
  "NodeJs",
  "NodeJs",
  "NodeJs",
  "NodeJs",
  "NodeJs",
  "NodeJs",
  "NodeJs",
  "NodeJs",
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Hi, I'm{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Yuda',
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  'a Software Developer',
                  1500,
                  'a Coding Instructor',
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
              A versatile developer and educator with expertise in mobile app, API, backend development, and teaching.
            </p>
            <div className='text-[#adb7be]'>
              <ul>
                {
                  stacks.map((stack, index) =>
                    <li key={index} className="inline-block mr-2">{stack}</li>
                  )
                }
              </ul>
            </div>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white">
                {/* link download CV */}
                <Link href={"/"} className='flex items-center'>
                  <FaDownload className='inline-block mr-2' />
                  Download CV
                </Link>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2">
                  <Link
                    href={"https://yudanto.notion.site/yudanto/761b890cfd4a4ca699bfb1c1040a4c19?v=8da033def2cf44b2aab6c1c02d861b2b"}
                    className='flex items-center'>
                    <FaLaptopCode className='inline-block mr-2' />
                    Projects
                  </Link>
                </span>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2">
                  <Link href={"https://github.com/yudantoanas"} className='flex items-center'>
                    <FaGithub className='inline-block mr-2' />
                    Github
                  </Link>
                </span>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-2">
                  <Link href={"https://www.linkedin.com/in/yudantoanas"} className='flex items-center'>
                    <FaLinkedin className='inline-block mr-2' />
                    LinkedIn
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
              <Image
                src="/images/avatar1.png"
                alt="avatar"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
