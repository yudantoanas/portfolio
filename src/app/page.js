"use client"
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaLaptopCode, FaDownload } from "react-icons/fa6";
import { createClient } from '@supabase/supabase-js'

const stacks = [
  {
    name: "Java",
    path: "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png?size=48",
  },
  {
    name: "Kotlin",
    path: "https://raw.githubusercontent.com/github/explore/4479d2a2c854198cb00160f8593519c14dc3b905/topics/kotlin/kotlin.png?size=48",
  },
  {
    name: "PHP",
    path: "https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png?size=48",
  },
  {
    name: "Golang",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/go/go.png?size=48",
  },
  {
    name: "Python",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png?size=48",
  },
  {
    name: "Javascript",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png?size=48",
  },
  {
    name: "PostgreSQL",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png?size=48",
  },
  {
    name: "MySQL",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png?size=48",
  },
  {
    name: "React",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png?size=48",
  },
  {
    name: "Laravel",
    path: "https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/laravel/laravel.png?size=48",
  },
  {
    name: "NodeJS",
    path: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png?size=48",
  },
  {
    name: "Docker",
    path: "https://avatars.githubusercontent.com/u/7739233?s=48&v=4",
  },
  {
    name: "Android",
    path: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/android/android.png?size=48",
  },
]

export default function Home() {
  // Create a single supabase client for interacting with your database
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  const { publicUrl } = supabase
    .storage
    .from('misc')
    .getPublicUrl('resume.pdf')
    .data

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      <div className="container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
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
            <p className="text-slate-900 text-base sm:text-lg lg:text-xl mb-6">
              A versatile developer and educator with expertise in mobile app, API, backend development, and teaching.
            </p>
            <div>
              <ul>
                {
                  stacks.map((stack, index) =>
                    <li key={index} className="group inline-block mr-2">
                      <div className="flex items-center justify-center">
                        <Image
                          src={stack.path}
                          width={30}
                          height={30}
                        />
                        <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute opacity-0 mt-1 mx-auto">{stack.name}</span>
                      </div>
                    </li>
                  )
                }
              </ul>
            </div>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-white">
                <Link download={"resume.pdf"}
                  href={publicUrl}
                  className='flex items-center'
                  target='_blank'>
                  <FaDownload className='inline-block mr-2' />
                  Download CV
                </Link>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-black mt-3">
                <span className="block bg-slate-100 rounded-full px-5 py-2">
                  <Link
                    href={"https://yudanto.notion.site/yudanto/761b890cfd4a4ca699bfb1c1040a4c19?v=8da033def2cf44b2aab6c1c02d861b2b"}
                    className='flex items-center'>
                    <FaLaptopCode className='inline-block mr-2' />
                    Projects
                  </Link>
                </span>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-black mt-3">
                <span className="block bg-slate-100 rounded-full px-5 py-2">
                  <Link href={"https://github.com/yudantoanas"} className='flex items-center'>
                    <FaGithub className='inline-block mr-2' />
                    Github
                  </Link>
                </span>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-800 text-black mt-3">
                <span className="block bg-slate-100 rounded-full px-5 py-2">
                  <Link href={"https://www.linkedin.com/in/yudantoanas"} className='flex items-center'>
                    <FaLinkedin className='inline-block mr-2' />
                    LinkedIn
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-slate-300 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
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
