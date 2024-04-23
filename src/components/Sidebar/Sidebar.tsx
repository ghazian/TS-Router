export default function Sidebar() {
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="hidden overflow-y-auto lg:static lg:block">
        <nav className="space-y-6 px-2 pb-24 pt-5">
          <div>
            <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
              <div>Tanstack routing 1</div>
            </div>
            <div className="space-y-1">
              <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
                Router 1
              </a>
              <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
                Router 2
              </a>
              <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
                Router 3
              </a>
            </div>
          </div>
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
            <div>Tanstack routing 2</div>
          </div>
          <div className="space-y-1">
            <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
              Router 1
            </a>
            <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
              Router 2
            </a>
            <a className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-300">
              Router 3
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
