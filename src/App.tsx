import Sidebar from 'components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-72">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:p-8">
          <div className="rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-white">Hello!</div>
          </div>
          <div className="rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-white p-3.5 lg:p-6">
              This is a new route! This is a new route! This is a new route!
              This is a new route! This is a new route!This is a new route!
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
