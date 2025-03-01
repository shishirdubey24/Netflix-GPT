
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import Appstore from './utils/Appstore'

function App() {
 

  return (
  <>
  <Provider store={Appstore}>

  <Body/>
  </Provider>

  </>
  )
}

export default App
