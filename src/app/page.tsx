import Landing from './landing'
import { poppins } from './layout'

export default function App() {
  return (
    <>
      <div className='absolute g-gray-600/30 rounded-full px-12 py-2 w-fit top-5 right-2 z-50'>
        <p className={`text-[14px]`}>{`🧙🏼‍♂️🔮 TechnoWizard`}</p>
      </div>
      <Landing />
    </>
  )
}
