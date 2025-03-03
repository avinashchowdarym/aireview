
import './App.css'
import Code from './components/Code'
import Review from './components/Review'

function App() {

  return (
    <div className='flex w-full h-full justify-center items-center overflow-hidden'>

      {/* Code Mirror */}
      <Code />
      {/* {Review} */}
      <Review />
    </div>
  )
}

export default App
