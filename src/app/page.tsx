import Link from "next/link";

export default function Home() {
  return (
    <body>
      <header className="text-white">
        <nav className="flex items-center justify-evenly space-x-6 mt-5">
          <div className="flex items-center justify-evenly">
            <ul>
              <Link href="/" className="border-2 border-white font-extrabold px-5 py-3">Narmeen</Link>
              <Link href="/" className="p-2">Products</Link>
              <Link href="/" className="p-2">Services</Link>
              <Link href="/" className="p-2">Pricing</Link>
              <Link href="/" className="p-2">Resources</Link>
              <Link href="/" className="p-2">About</Link>
            </ul>
            <div className="flex justify-end space-x-5">
              <button className="px-5 py-3 bg-blue-900 border-1 border-blue-600 rounded-md">Login</button>
              <button className="px-5 py-3 bg-blue-950 border-1 border-blue-700 rounded-md">Sign Up</button>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </body>
  );
}
