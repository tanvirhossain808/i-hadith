
import { createContext, useContext } from 'react'
import './App.css'
import HaidthBookHeader from './components/HadithBookHeader/HaidthBookHeader'
import Navbar from './components/Navbar/Navbar'
import HadithBookName from './pages/HadisName/HadithBookName'
import { dataProvider } from './store/Data'
import useGetBookName from './hooks/useGetBooksName';
import useGetChapterName from './hooks/useGetChapterName'
import HadithDiscription from './components/HadithDiscription/HadithDiscription'
import useGetAllHadith from './hooks/useGetAllHadith'
import useGetSection from './hooks/useGetSection'

function App() {
  const { data } = useContext(dataProvider)
  const { isLoading } = useGetBookName()
  const { isLoading: chapterLoading } = useGetChapterName()
  const { isLoading: getHadithLoadig } = useGetAllHadith()
  const { isLoading: getSectionLoading } = useGetSection()



  return (
    <>



      <HaidthBookHeader />

      <div className='flex'>
        <Navbar />
        <div className="pageContainer flex gap-5 bg-[#F2F4F6] h-80vh w-full rounded-3xl p-5">
          <HadithBookName />
          <div className='w-full haditSection h-[82vh]  rounded-lg  overflow-y-scroll'>
            <HadithDiscription />
          </div>
        </div>



      </div>


    </>
  )
}

export default App
