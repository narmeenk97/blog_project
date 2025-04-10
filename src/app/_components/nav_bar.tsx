import Link from "next/link";

export default function NavBar() {
    return (
        <header className="text-white">
          <nav className="flex flex-row md:fles-col items-start md:items-center justify-between px-4 mt-5">
            <div>
              <ul className="flex flex-row md:fles-col items-start md:items-center md:space-y-0 md:space-x-6">
            <li>
              <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md border-2 border-white font-extrabold px-5 py-3" aria-expanded="true" aria-haspopup="true">
                    Narmeen
                  <svg className="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                  </button>
                </div>
                </li>
                <li>
                <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-2 pl-2">Products
                    <svg className="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                </li>
                <li>
                <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-2 pl-2">Services
                    <svg className="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                </li>
                <li>
                <Link href="/" className="p-2">Pricing</Link>
                </li>
                <li>
                <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 px-2 pl-2">Resources
                    <svg className="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                </li>
                <li>
                <Link href="/" className="p-2">About</Link>
                </li>
            </ul>
            </div>
              <div className="flex items-center space-x-5">
                <button type="button" className="px-5 py-3 bg-blue-900 border-1 border-blue-600 rounded-md">Login</button>
                <button type="button" className="px-5 py-3 bg-blue-950 border-1 border-blue-700 rounded-md">Sign Up</button>
              </div>
          </nav>
          <div className="flex lg:hidden justify-end p-4">
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
    );
  }