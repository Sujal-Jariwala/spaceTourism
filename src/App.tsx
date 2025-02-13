import Header from './components/Header/Header'
import { Outlet } from 'react-router'
import { useImagePreloader } from './hooks/useImgLoader'

function App() {

  useImagePreloader();
  return (
    <>
    <main>
      <Header/>
      <Outlet/>
    </main>

    </>
  )
}

export default App
