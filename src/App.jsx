
import { createContext, useContext } from 'react'
import './App.css'
import HaidthBookHeader from './components/HadithBookHeader/HaidthBookHeader'
import Navbar from './components/Navbar/Navbar'
import HadithBookName from './pages/HadisName/HadithBookName'
import { dataProvider } from './store/Data'
import useGetBookName from './hooks/useGetBooksName';
import useGetChapterName from './hooks/useGetChapterName'

function App() {
  const { data } = useContext(dataProvider)
  console.log(data);
  const { isLoading } = useGetBookName()
  const { isLoading: chapterLoading } = useGetChapterName()
  // console.log(isLoading);

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
