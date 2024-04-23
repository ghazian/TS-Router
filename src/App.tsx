import Sidebar from 'components/Sidebar/Sidebar'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <Sidebar />
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a TanStack Router exploration!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
