import React from "react";

export default function Intro() {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center text-white px-4 mt-12">
            <div className="mr-4 px-5 py-3 w-1/2">
                <h1 className="text-blue-400">Welcome to Narmeen&apos;s Blog</h1>
                <p className="text-4xl py-4 font-bold">Learning Tailwind CSS</p>
                <form className="max-w-sm">
                    <div className="">
                        <input className="border-1 border-blue-300 rounded-md px-6 py-2 mb-3 mr-3 mt-4 leading-tight focus:outline-none" type="text" placeholder="Enter your email" />
                        <button className="flex-shrink-0 px-5 py-2 mb-2 mr-2 bg-blue-900 border-1 border-blue-600 rounded-md">Get Started</button>
                    </div>
                </form>
                <p className="text-blue-300 text-xs">We care about your data. Check out our {" "}
                    <span className="underline">privacy policy.</span>
                </p>
            </div>
            <div className="px-5 py-3 w-1/2">
                <h1 className="text-blue-400 px-6 py-2 mb-3 mr-3 mt-4 ">Subscribe to my blog to keep up with the projects I'm working on currently.</h1>
                <p className="text-blue-200 px-6 py-2 mb-3 mr-3 mt-4 ">This is a purely front-end project for me to develop my skills in Tailwind CSS.</p>
            </div>
        </div>
    )
}