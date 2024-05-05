
import './App.css'
import HaidthBookHeader from './components/HadithBookHeader/HaidthBookHeader'
import Navbar from './components/Navbar/Navbar'
import HadithBookName from './pages/HadisName/HadithBookName'

function App() {

  return (
    <>



      <HaidthBookHeader />

      <div className='flex'>
        <Navbar />
        <div className="pageContainer bg-[#F2F4F6] h-80vh w-full rounded-3xl p-5">
          <HadithBookName />

        </div>


      </div>


    </>
  )
}

export default App
